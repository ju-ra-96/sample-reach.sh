import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  const stdlib = await loadStdlib(process.env);

  const accIBO = await stdlib.newTestAccount(stdlib.parseCurrency(5));
  const accSupplier = await stdlib.newTestAccount(stdlib.parseCurrency(10));
  const accCert = await stdlib.newTestAccount(stdlib.parseCurrency(10));
  const accCustomer = await stdlib.newTestAccount(stdlib.parseCurrency(10));


  const ctcIBO = accIBO.deploy(backend);
  const ctcSupplier = accSupplier.attach(backend, ctcIBO.getInfo());
  const ctcCert = accCert.attach(backend, ctcIBO.getInfo());
  const ctcCustomer = accCustomer.attach(backend, ctcIBO.getInfo());



  await Promise.all([
    backend.IBO(ctcIBO, {
      request: stdlib.parseCurrency(5), //how much does IBO want from the customer
      showTerms: (terms) => {
        console.log(`[BALL: CADetc]`)
        return "{productName: Test!, CAD: ...}"
      },
      sentCADtoSupplier: (cad) => {
        console.log(`CAD file ${cad} sent to Supplier`)
        return true
      },
      ackProductReceived: (terms, from) => {
        console.log(`IBO received product ${terms} from ${from}!`)
        return true
      },
      shippedProduct: (to, purpose) => {
        console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)
        return true
      }

    }),
    backend.Supplier(ctcSupplier, {
      want: (amt) => console.log(`IBO asks Supplier for ${stdlib.formatCurrency(amt)}`),
      ackCADreceived: (cad) => {
        console.log(`Supplier received CAD file ${cad}!`)
        return true
      },
      shippedProduct: (to, purpose) => {
        console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)
        return true
      }
    }),

    backend.Cert(ctcCert, {

      ackProductReceived: (from) => {
        console.log(`Cert Authority received product from ${from}!`)
        return true
      },
      certified: () => {
        console.log(`Cert Authority certified the product!`)
        return true
      },
      notCertified: () => {
        console.log(`Cert Authority DID NOT certify the product!`)
        return true
      },
      shippedProduct: (to, purpose) => {
        console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)
        return true
      }
    }),

    backend.Customer(ctcCustomer, {
      want: (amt) => {
        console.log(`IBO asks Supplier for ${stdlib.formatCurrency(amt)}`)
        return true
      },
      acceptTerms: (terms) => {
        console.log(`Customer accepts the terms ${terms}!`)
        return true
      },
      ackProductReceived: (from) => {
        console.log(`Customer received product from ${from}!`)
        return true
      }
    }),
  ]);
})();