import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as AppViews from './views/AppViews';
import * as IBOViews from './views/IBOViews';
import * as SupplierViews from './views/SupplierViews';
import * as CertViews from './views/CertViews';
import * as CustomerViews from './views/CustomerViews';
import * as backend from './build/index2.main.mjs';
import * as reach from '@reach-sh/stdlib/ALGO';
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');

const { standardUnit } = reach;
const defaultFundAmtStandard = '10';

function renderDOM() {
    ReactDOM.render(
        <React.StrictMode><App /></React.StrictMode>,
        document.getElementById('root')
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'ConnectAccount' }
    }
    async componentDidMount() { // from mode: ConnectAccount
        // connect algosigner

        const acc = await reach.getDefaultAccount();
        const addr = await acc.getAddress();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ mode: 'SelectRole', acc, addr, bal });
    
    }
    fundAccount(fundAmountStandard) { // from mode: FundAccount
        const { faucet, acc } = this.state;
        const amountAtomic = reach.parseCurrency(fundAmountStandard || defaultFundAmtStandard);
        reach.transfer(faucet, acc, amountAtomic);
        this.setState({ mode: 'SelectRole' });
    }
    skipFundAccount() { this.setState({ mode: 'SelectRole' }); } // from mode: FundAccount
    selectRole(role) { this.setState({ mode: 'RunRole', role }); } // from mode: SelectRole
    selectSupplier() { this.selectRole(<Supplier acc={this.state.acc} />); }
    selectIBO() { this.selectRole(<IBO acc={this.state.acc} />); }
    selectCert() { this.selectRole(<Cert acc={this.state.acc} />); }
    selectCustomer() { this.selectRole(<Customer acc={this.state.acc} />); }
    render() {
        const { mode, role } = this.state;
        const parent = this;
        let app = null;
        if (mode === 'ConnectAccount') {
            app = <AppViews.ConnectAccount />
        } else if (mode === 'SelectRole') {
            app = <AppViews.SelectRole {...{ parent }} />
        } else { // 'RunRole'
            app = role;
        }
        return <AppViews.Wrapper {...{ app }}  />;
    }
}

class IBO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'Deploy' };


    }
    async deploy() { // from mode: Deploy
        const ctc = this.props.acc.deploy(backend);
        this.setState({ mode: 'RunBackend', ctc });
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({ ctcInfoStr, ctc });

    }



    async sentCADs() {
        this.setState({ mode: 'WaitingForProduct' });
    }

    async shippedProduct() {
        this.setState({ mode: 'WaitingForCertified' });
    }
    async shippedProductFinal() {
        this.setState({ mode: 'Finished' });
    }


    enterInfo(info) { this.setState({ mode: 'EnterRequest', info }); } // from mode: EnterInfo
    enterRequest(requestStandard) { this.setState({ mode: 'RunBackend', requestStandard }); } // from mode: EnterRequest
    async runBackend() { // from mode: RunBackend
        const { ctc } = this.state;
        this.setState({ mode: 'BackendRunning' });
        //  const request = reach.parseCurrency(requestStandard);

        const interact = {
            want: (request) => this.setState({ mode: 'DisplayInfo', requestStandard: reach.formatCurrency(request, 4) }),
            got: (info) => this.setState({ info }),
            request: reach.parseCurrency(5), //how much does IBO want from the customer
            showTerms: async (term) => {

                return await new Promise(resolveShowTerms => {
                    this.setState({ mode: 'ShowTerms', term, resolveShowTerms });
                });
            },
            sentCADtoSupplier: async (cad) => {
                console.log(`CAD file ${cad} sent to Supplier`)
                return await new Promise(resolveSendCADFile => {
                    this.setState({ mode: 'SendCADToSupplier', cad, resolveSendCADFile });
                });
            },
            ackProductReceived: async (term, from) => {
                console.log(`IBO received product from ${from}!`)
                const terms = term.length > 0 ? term.replace(/\0/g, '') : ""
                return await new Promise(resolveAckProductReceived => {
                    this.setState({ mode: 'AckProductReceived', resolveAckProductReceived, terms, from });
                });

            },
            shippedProduct: async (to, purpose) => {
                console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)

                if (to.substring(0, 3) === "Cer") {
                    return await new Promise(resolveShippedToCerts => {
                        this.setState({ mode: 'ShippedToCert', resolveShippedToCerts, purpose });
                    });
                } else {
                    return await new Promise(resolveShippedToCustomer => {
                        this.setState({ mode: 'ShippedToCustomer', resolveShippedToCustomer, purpose });
                    });
                }
            }
        };
        await backend.IBO(ctc, interact);
        //this.setState({ mode: 'BackendRan' });
    }

    async acknowledgedProduct() {
        this.setState({ mode: 'ShipProduct' });
    }




    render() {
        let ibo = null;
        const parent = this;
        const { mode, ctcInfoStr, requestStandard,
            info, resolveShowTerms, resolveSendCADFile,
            resolveShippedToCerts, resolveAckProductReceived, purpose, resolveShippedToCustomer, terms, from } = this.state;
        if (mode === 'Deploy') {
            ibo = <IBOViews.Deploy {...{ parent }} />;
        } else if (mode === 'RunBackend') {
            ibo = <IBOViews.RunBackend {...{ parent, info, requestStandard, standardUnit }} />;
        } else if (mode === 'BackendRunning') {
            ibo = <IBOViews.BackendRunning {...{ ctcInfoStr }} />;
        } else if (mode === 'ShowTerms') {
            ibo = <IBOViews.ShowTerms {...{ ctcInfoStr, resolveShowTerms }} />;
        } else if (mode === 'SendCADToSupplier') {
            ibo = <IBOViews.SendCADToSupplier {...{ ctcInfoStr, resolveSendCADFile, parent }} />;
        } else if (mode === 'WaitingForProduct') {
            ibo = <IBOViews.WaitingForProduct {...{ ctcInfoStr, parent }} />;
        } else if (mode === 'AckProductReceived') {
            ibo = <IBOViews.AckProductReceived {...{ ctcInfoStr, resolveAckProductReceived, parent, terms, from }} />;
        } else if (mode === 'ShippedToCert') {
            ibo = <IBOViews.ShippedToCert {...{ ctcInfoStr, parent, resolveShippedToCerts, purpose }} />;
        } else if (mode === 'WaitingForCertified') {
            ibo = <IBOViews.WaitingForCertified {...{ ctcInfoStr, parent }} />;
        } else if (mode === 'ShippedToCustomer') {
            ibo = <IBOViews.ShippedToCustomer {...{ ctcInfoStr, parent, resolveShippedToCustomer, purpose }} />;
        } else if (mode === 'Finished') {
            ibo = <IBOViews.Finished {...{ ctcInfoStr }} />;
        }

        else { // 'BackendRan'
            ibo = <IBOViews.BackendRan />;
        }
        return <IBOViews.IBOWrapper {...{ ibo }} />
    }
}

class Supplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'RunBackend' };
    }
    async runBackend(ctcInfoStr) { // from mode: RunBackend
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = this.props.acc.attach(backend, ctcInfo);
        this.setState({ mode: 'ApproveRequest' });
        const interact = {
            ackCADreceived: async (terms) => {
                console.log(`Supplier received CAD file ${terms}!`)
                return await new Promise(resolveAckProductReceived => {
                    this.setState({ mode: 'AckProductReceived', terms, resolveAckProductReceived });
                });
            },
            shippedProduct: async (to, purpose) => {
                console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)
                return await new Promise(resolveShipProduct => {
                    this.setState({ mode: 'ShipProduct', resolveShipProduct });
                });
            }
        };
        await backend.Supplier(ctc, interact);
    }
    async acknowledgedProduct() {
        // this.setState({ mode: 'ShipProduct' });
        console.log("lol")
    }

    async shippedProduct() {
        this.setState({ mode: 'Finished' });
    }

    render() {
        let supplier = null;
        const parent = this;
        const { mode, requestStandard, resolveAckProductReceived, resolveShipProduct } = this.state;
        if (mode === 'RunBackend') {
            supplier = <SupplierViews.RunBackend {...{ parent }} />
        } else if (mode === 'ApproveRequest') {
            supplier = <SupplierViews.ApproveRequest {...{ requestStandard }} />;
        } else if (mode === 'AckProductReceived') {
            supplier = <SupplierViews.AckProductReceived {...{ requestStandard, resolveAckProductReceived, parent }} />;
        } else if (mode === 'ShipProduct') {
            supplier = <SupplierViews.ShipProduct {...{ requestStandard, resolveShipProduct, parent }} />;
        }
        else { // 'DisplayInfo'
            supplier = <SupplierViews.DisplayInfo  />
        }
        return <SupplierViews.SupplierWrapper {...{ supplier }} />;
    }
}


class Cert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'RunBackend' };
    }



    async runBackend(ctcInfoStr) { // from mode: RunBackend
        // const { ctc, requestStandard, info } = this.state;
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = this.props.acc.attach(backend, ctcInfo);
        this.setState({ mode: 'ApproveRequest' });
        const interact = {
            ackProductReceived: async (from) => {
                console.log(`Cert Authority received product from ${from}!`)
                return await new Promise(resolveAckProductReceived => {
                    this.setState({ mode: 'AckProductReceived', resolveAckProductReceived });
                });
            },
            certified: async () => {
                console.log(`Cert Authority certified the product!`)
                return await new Promise(resolveCertifyProduct => {
                    this.setState({ mode: 'CertifyProduct', resolveCertifyProduct });
                });
            },
            notCertified: () => {
                console.log(`Cert Authority DID NOT certify the product!`)
                return true
            },
            shippedProduct: async (to, purpose) => {
                console.log(`Shipped product to ${to} for the purpose of ${purpose}!`)
                return await new Promise(resolveShipToIBO => {
                    this.setState({ mode: 'ShipProductToIBO', resolveShipToIBO, to, purpose });
                });
            }
        }
        await backend.Cert(ctc, interact);
        this.setState({ mode: 'BackendRan' });
    }

    async acknowledgedProduct() {
        // this.setState({ mode: 'ShipProduct' });
        console.log("lol")
    }

    async finished() {
        this.setState({ mode: 'DisplayInfo' });
        console.log("Cert Authority is finished")
    }


    render() {
        let cert = null;
        const parent = this;
        const { mode, requestStandard, info, resolveAckProductReceived, resolveCertifyProduct, resolveShipToIBO, to, purpose } = this.state;
        if (mode === 'RunBackend') {
            cert = <CertViews.RunBackend {...{ parent }} />
        } else if (mode === 'ApproveRequest') {
            cert = <CertViews.ApproveRequest {...{ requestStandard }} />;
        } else if (mode === 'AckProductReceived') {
            cert = <CertViews.AckProductReceived {...{ requestStandard, resolveAckProductReceived, parent }} />;
        } else if (mode === 'CertifyProduct') {
            cert = <CertViews.CertifyProduct {...{ requestStandard, resolveCertifyProduct, parent }} />;
        } else if (mode === 'ShipProductToIBO') {
            cert = <CertViews.ShipProductToIBO {...{ requestStandard, resolveShipToIBO, to, purpose, parent }} />;
        }

        else { // 'DisplayInfo'
            cert = <CertViews.DisplayInfo {...{ info }} />
        }
        return <CertViews.CertWrapper {...{ cert }} />;
    }
}



class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'RunBackend', terms: "" };
    }

    // from mode: EnterInfo

    async runBackend(ctcInfoStr) { // from mode: RunBackend
        // const { ctc, requestStandard, info } = this.state;
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = this.props.acc.attach(backend, ctcInfo);
        this.setState({ mode: 'ApproveRequest' });
        const interact = {
            acceptTerms: async (terms) => {
                console.log(`Customer accepts the terms ${terms}!`)
                return await new Promise(resolveAcceptTerms => {
                    this.setState({ mode: 'AcceptTerms', terms, resolveAcceptTerms, ctc });
                });
            },
            ackProductReceived: async (from) => {
                console.log(`Customer received product from ${from}!`)
                return await new Promise(resolveProductReceived => {
                    this.setState({ mode: 'ReceivedProduct', from, resolveProductReceived });
                });

            }
        }
        await backend.Customer(ctc, interact);

    }
    async acceptedTerms() {
        this.setState({ mode: 'WaitingForProduct' });
    }

    async finished() {
        this.setState({ mode: 'Finished' });
    }

    render() {
        let customer = null;
        const parent = this;
        const { mode, requestStandard, info, resolveAcceptTerms, resolveProductReceived, from, ctc } = this.state;
        const terms = this.state.terms.replace(/\0/g, '')
        if (mode === 'RunBackend') {
            customer = <CustomerViews.RunBackend {...{ parent }} />
        } else if (mode === 'ApproveRequest') {
            customer = <CustomerViews.ApproveRequest {...{ requestStandard }} />;
        } else if (mode === 'AcceptTerms') {
            customer = <CustomerViews.AcceptTerms {...{ requestStandard, terms, resolveAcceptTerms, parent, ctc }} />;
        } else if (mode === 'ReceivedProduct') {
            customer = <CustomerViews.ReceivedProduct {...{ requestStandard, from, resolveProductReceived, parent }} />;
        } else if (mode === 'WaitingForProduct') {
            customer = <CustomerViews.WaitingForProduct {...{ requestStandard, from, resolveProductReceived, parent, ctc }} />;
        } else if (mode === 'Finished') {
            customer = <CustomerViews.Finished {...{ parent }} />;
        } else { // 'DisplayInfo'
            customer = <CustomerViews.ApproveRequest {...{ info }} />
        }
        return <CustomerViews.CustomerWrapper {...{ customer }} />;
    }
}




renderDOM();