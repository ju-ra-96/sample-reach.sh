
![ReachKey](https://i.imgur.com/bHC522p.png)


*ReachKey is a blockchain platform with escrow and notarization features for the purpose of recording and executing business processes that involve multiple stakeholders in a production environment. ReachKey offers the flexibility of being chain-agnostic, allowing the customer IBO Digital to jump seamlessly between ledgers like Algorand or Ethereum. With an easy-to-use UI and a smart contract that guarantees an in-order transaction execution. Thanks to the Reach framework, ReachKey is a prototype that implements sample business processes provided by IBO Digital fully and without compromises.*

Our project work consists of multiple parts. The main part is in the master branch. This part consists of a frontend which displays the different steps of the smart contract as described in our documentation.

In the branch django-react-addon, you can find the Django Stack that we used to support our development process, **though we do not consider it a substantial part of the submission.**

The folder `/src/prototypeContract` contains the source of the Smart Contract (index.rsh) and the corresponding test helper (index.mjs).

​
#  Installation  Steps

​

After cloning the repository, please run

###  `yarn  install`  to  install  all  required  dependencies.

Then, run

###  `yarn  start`  to  start  the  project.

​



##  Important  :  Before  running  the  project!

Please make sure that you have Google Chrome installed and that you use Chrome to run this App. You can download Chrome [here](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjw3MSHBhB3EiwAxcaEu13Tf_SPYiB47-V3ymgoBFidEbRsgY4UcRDVPnOSI1VMegT-vzFhOBoCBgoQAvD_BwE&gclsrc=aw.ds) and you will also need AlgoSigner which you can get [here](https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm) .

Switch the AlgoSigner to "TestNet" in the upper-right corner of the extension.

Now also make sure to create four different test wallets in AlgoSigner, ideally called: 

####  IBO

####  Supplier

####  CertAuthority  

####  Customer

​

###  Please  note  down  your  mnemonic  and  public  key  for  the  steps  ahead!

​

After creating the accounts you will have to make sure that they are funded with enough Algos.

You can do that by using the dispenser. Please go ahead and fund your accounts, otherwise you will not be able to execute the smart contract. 

Visit [this page](https://bank.testnet.algorand.network/) to fund your accounts, you will have to provide your public key for that.

​

##  Run  the  project

This should load the project on [http://localhost:3000](http://localhost:3000)  as described above.

In case of errors, please reload the page. Sometimes, AlgoSigner is not recognized, and reloading will allow you to input addresses.

Now the execution of the smart contract can start. Please choose IBO as a role and then start the process. 

Make sure to switch to the different corresponding accounts along the process chain.
Deploy the smart contract as IBO instance and then deploy it. 

Make sure that three different browser tabs or windows are open to sign in into three remaining accounts.

Now the terms of the smart contract are shown to the IBO instance, the IBO instance now has to share that information with the other three remaining accounts. 

The customers now accept the terms of the contract and then in the next step the CAD file is being sent to the suppliers from IBO. After the reception of the files the Supplier confirms this. 
**When accepting the Terms, the Customer pays 5 algos to the contract, so make sure to have sufficient funding in your account and utilize the faucet otherwise.**

After receiving the CAD file, the supplier ships the product back to IBO and then IBO confirms that it received the product back. 

Now IBO sends the product to the cert authority and the cert authority confirms in turn the product reception.

The cert authority certifies the product and ships it back to IBO. Finally, IBO ships the product to the Customer and the customer acknowledges that he received the final product.
**Only at this point does IBO get the 5 algos paid by the customer.**
