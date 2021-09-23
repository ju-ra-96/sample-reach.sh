'reach 0.1';
'use strict';


function pad(pad, str, padLeft) {
  if (typeof str === 'undefined') 
    return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}


export const main = Reach.App(() => {
  const I = Participant('IBO', {
    request: UInt,
    showTerms: Fun([], Bytes(64)),
    sentCADtoSupplier: Fun([Bytes(64)], Bool),
    ackProductReceived: Fun([Bytes(64), Bytes(64)], Bool),
    shippedProduct: Fun([Bytes(64), Bytes(64)], Bool),
  });
  const S = Participant('Supplier', {
    ackCADreceived: Fun([Bytes(64)], Bool),
    shippedProduct: Fun([Bytes(64), Bytes(64)], Bool),
  });
  const CE = Participant('Cert', {
    ackProductReceived: Fun([Bytes(64)], Bool),
    certified: Fun([Bytes(64)], Bool),
    notCertified: Fun([Bytes(64)], Bool),
    shippedProduct: Fun([Bytes(64), Bytes(64)], Bool),
  });
  const CU = Participant('Customer', {
    acceptTerms: Fun([Bytes(64)], Bool),
    ackProductReceived: Fun([Bytes(64)], Bool),
  });
  const V =  View('Main', { status: Bytes(64), step: UInt });
  deploy();


// IBO: showTerms() and request X
I.only(() => {
  const terms = declassify(interact.showTerms());
  const request = declassify(interact.request); });
  I.publish(terms,request);
  V.status.set(Bytes(64).pad('IBO showed the Terms for the product.'));
  V.step.set(1);
commit();



// Customer: acceptTerms() and pay X to contract
CU.only(() => {
const acceptTerms = declassify(interact.acceptTerms(terms)); });
CU.publish(acceptTerms);
V.status.set(Bytes(64).pad('Customer accepted the terms.'));
  V.step.set(2);
commit();
CU.pay(request);
V.status.set(Bytes(64).pad('Customer paid the 5 requested algos.'));
  V.step.set(3);
commit();
// IBO: sendCADtoSupplier()

I.only(() => {
  const sentCAD = declassify(interact.sentCADtoSupplier(terms));
});

  I.publish(sentCAD);
  V.status.set(Bytes(64).pad('IBO sent CAD files to the Supplier.'));
  V.step.set(4);
commit();

// Supplier: ackCAD()

S.only(() => {
  const ackCAD = declassify(interact.ackCADreceived(terms));
});
  S.publish(ackCAD);
  V.status.set(Bytes(64).pad('Supplier received the CAD files.'));
  V.step.set(5);
commit();

// Supplier: shipProductToIBO()
S.only(() => {
  const shippedProduct = declassify(interact.shippedProduct(Bytes(64).pad("IBO"), Bytes(64).pad("product delivery")));
});
  S.publish(shippedProduct);
  V.status.set(Bytes(64).pad('Supplier shipped the finished product to IBO.'));
  V.step.set(6);
commit();


// IBO: ackProductReceived()

I.only(() => {
  const ackProductReceived = declassify(interact.ackProductReceived(terms, Bytes(64).pad("Supplier")));
});
  I.publish(ackProductReceived);
  V.status.set(Bytes(64).pad('IBO received finished product.'));
  V.step.set(7);
commit();

// IBO: shipProductToCertAuthority()

I.only(() => {
  const shippedToCertAuthority = declassify(interact.shippedProduct(Bytes(64).pad("Cert Authority"), Bytes(64).pad("of certification")));
});
  I.publish(shippedToCertAuthority);
  V.status.set(Bytes(64).pad('IBO shipped the product to the Certification Authority.'));
  V.step.set(8);
  commit();
  // Cert Authority: AckProductReceived()

 CE.only(() => {
    const ackProductReceivedCE = declassify(interact.ackProductReceived(Bytes(64).pad(terms)));
  });
    CE.publish(ackProductReceivedCE);
    V.status.set(Bytes(64).pad('Certification Authority received the product.'));
  V.step.set(9);
    commit();

// Cert Authority: Certify() / NoCertify()

CE.only(() => {
  const didCertify = declassify(interact.certified(terms));
});
  CE.publish(didCertify);
  V.status.set(Bytes(64).pad('Certification Authority successfully certified the product!'));
  V.step.set(10);
  commit();


// Cert Authority: shipProductToIBO()

CE.only(() => {
  const didShip = declassify(interact.shippedProduct(Bytes(64).pad("IBO"), Bytes(64).pad("successful certification")));
});
  CE.publish(didShip);
  V.status.set(Bytes(64).pad('Certification Authority shipped product to IBO.'));
  V.step.set(11);
  commit();

// IBO: AckProductReceived2()


I.only(() => {
  const ackProductReceived2 = declassify(interact.ackProductReceived(terms, Bytes(64).pad("Cert Authority")));
});
  I.publish(ackProductReceived2);
  V.status.set(Bytes(64).pad('IBO received the certified product.'));
  V.step.set(12);
commit();

// IBO: shipProductToCustomer()

I.only(() => {
  const shippedToCustomer = declassify(interact.shippedProduct(Bytes(64).pad("Customer"), Bytes(64).pad("final delivery")));
});
  I.publish(shippedToCustomer);
  V.status.set(Bytes(64).pad('Ibo shipped the product to the customer.'));
  V.step.set(13);
commit();

// Customer: ackProductReceived() -> pay to IBO
CU.only(() => {
  const ackProductReceivedCU = declassify(interact.ackProductReceived(terms)); });
  CU.publish(ackProductReceivedCU);

  transfer(request).to(I);
  V.status.set(Bytes(64).pad('The customer received the final product and paid out IBO.'));
  V.step.set(14);
  commit();

//exit

  exit();


});