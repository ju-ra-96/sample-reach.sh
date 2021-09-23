import React from 'react';
import { Button, Heading, Text } from "rimble-ui";
import { MetaMaskButton } from 'rimble-ui';
import NavbarComponent from '../components/navbar'
import ProgressBars from '../components/ProgressComponent';
import 'bootstrap/dist/css/bootstrap.min.css'







const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

export class Deploy extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div><Heading>IBO</Heading>
                <Text>
                    As IBO, it is your job to deploy the initial contract.
                </Text>
                <Button size="medium"
                    onClick={() => parent.deploy()}
                ><Text>Deploy</Text></Button>
            </div>
        );
    }
}


export class ShowTerms extends React.Component {
    render() {
        const { defaultInfo, resolveShowTerms, ctcInfoStr } = this.props;

        return (

            <div>     <Heading>IBO - Contract Info and Negotiate Terms (Step 1/14)</Heading> <div>
                <Text>
                    What are the terms of the products?
                </Text>
                <br />
                <textarea
                    onChange={(e) => this.setState({ info: e.currentTarget.value })}
                    placeholder={defaultInfo}
                />
                <br />
                <Button size="medium" onClick={() => resolveShowTerms(this.state.info)}>Send Terms</Button><br />
            </div>
                <div>
                    <Text>The contract is running!
                    </Text>
                    <h2>Please share the contract information with the other parties.</h2>

                    <pre className='ContractInfo'>
                        {ctcInfoStr}
                    </pre>
                    <br />

                    <br />



                </div>
            </div>
        );
    }
}

export class WaitingForProduct extends React.Component {
    render() {


        return (
            <div>
                <Text><Heading>IBO</Heading>
                    Waiting for product to be produced and shipped by the Supplier. This will refresh when product is shipped.
                </Text>


            </div>
        );
    }
}

export class Finished extends React.Component {
    render() {


        return (
            <div><Heading>IBO</Heading>
                <Text>
                    You've shipped the product to the Customer.
                </Text>


            </div>
        );
    }
}

export class WaitingForCertified extends React.Component {
    render() {


        return (
            <div>
                <Text><Heading>IBO</Heading>
                    Waiting for certification by the Cert Authority. This will refresh when product is certified and shipped back.
                </Text>


            </div>
        );
    }
}

export class SendCADToSupplier extends React.Component {
    render() {
        const { parent, resolveSendCADFile } = this.props;

        return (


            <div>
                <Heading>IBO - Send CAD Files (Step 3/14)</Heading>
                <Text>
                    Do you want to Send the CAD data to the Supplier?
                </Text>
                <br />

                <br />
                <Button size="medium" onClick={() => {
                    resolveSendCADFile(true)
                    parent.sentCADs()
                }}>Send CAD File to Supplier</Button><br />
            </div>

        );
    }
}

export class EnterRequest extends React.Component {
    render() {
        const { parent, defaultRequestStandard } = this.props;
        const { req } = this.state || {};
        return (
            <div>
                <Text>
                    How much algo should customer pay you for the product?
                </Text>
                <input
                    type='number'
                    onChange={(e) => this.setState({ req: e.currentTarget.value })}
                    placeholder={defaultRequestStandard}
                />
                <br /> <br />
                <Button size="medium" mr={3} onClick={() => parent.enterRequest(req || defaultRequestStandard)}>Submit request</Button><br />
            </div>
        );
    }
}

export class RunBackend extends React.Component {
    render() {
        const { parent, info } = this.props;
        return (
            <div>
                <Text>
                    You request 5 algo
                    to produce the following product: <strong>{info}</strong>
                </Text>

                <Text>
                    Ready to connect to the contract?
                </Text>

                <MetaMaskButton onClick={() => parent.runBackend()}>Connect Contract</MetaMaskButton><br />

            </div>
        );
    }
}

export class AckProductReceived extends React.Component {
    render() {
        const { parent, terms, from, resolveAckProductReceived } = this.props;

        return (
            <div><Heading>IBO - Acknowledge received product from {from} ({from.substring(0, 3) === "Sup" ? "6" : "11"}/14)</Heading>
                <Text>
                    Do you want to acknowledge that you received the product {terms} from {from}?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveAckProductReceived(true)
                        parent.acknowledgedProduct()
                    }}
                ><Text>Acknowledge</Text></Button>
            </div>
        );
    }
}



export class ShippedToCert extends React.Component {
    render() {
        const { parent, resolveShippedToCerts } = this.props;

        return (
            <div><Heading>IBO - Ship product to cert authority (Step 7/14)</Heading>
                <Text>
                    Do you want to ship the product?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveShippedToCerts(true)
                        parent.shippedProduct()
                    }}
                ><Text>Ship Product</Text></Button>
            </div>
        );
    }
}

export class ShippedToCustomer extends React.Component {
    render() {
        const { parent, resolveShippedToCustomer } = this.props;

        return (
            <div><Heading>IBO - Ship product to customer (Step 12/14)</Heading>
                <Text>
                    Do you want to ship the product?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveShippedToCustomer(true)
                        parent.shippedProductFinal()
                    }}
                ><Text>Ship Product</Text></Button>
            </div>
        );
    }
}

export class BackendRunning extends React.Component {
    async copyToClipborad(button) {
        const { ctcInfoStr } = this.props;
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }

    render() {
        const { ctcInfoStr } = this.props;
        if (ctcInfoStr === undefined) {
            return (
                <div>
                    <ProgressBars />
                    <Text>
                        Waiting for the contract to deploy...
                        If this takes more than 1 min, something may be wrong.
                    </Text>
                </div>
            )
        } else {
            return (
                <div>
                    <Heading>Contract Info</Heading>
                    <Text>The contract is running!
                        Please share the following contract info.
                    </Text>
                    <pre className='ContractInfo'>
                        {ctcInfoStr}
                    </pre>
                    <br />

                    <br />

                    <Text> will be automatically prompted to approve the next transaction
                        once the Customer has paid the requested amount into the contract.</Text>
                </div>
            );
        }
    }
}

export class BackendRan extends React.Component {
    render() {
        return (
            <div>
                <ProgressBars />
                <Text>
                    Waiting...
                </Text>
            </div>
        );
    }
}

export class IBOWrapper extends React.Component {
    render() {
        const { ibo } = this.props;
        return (
            <div className="IBO">
                <NavbarComponent />
                {ibo}
            </div>
        );
    }
}