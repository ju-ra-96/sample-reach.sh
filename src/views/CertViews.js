import React from 'react';
import { Button, Heading, Text } from "rimble-ui";

export class RunBackend extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <div>
                <Text><Heading>Certification Authority</Heading>
                    IBO will deploy the contract.
                </Text>
                <Text>
                    Get contract info from IBO and paste it here:
                </Text>
                <textarea
                    className='ContractInfo'
                    spellCheck='false'
                    onChange={(e) => this.setState({ ctcInfoStr: e.currentTarget.value })}
                    placeholder='{}'
                />
                <br />
                <Button
                    disabled={!ctcInfoStr}
                    onClick={() => parent.runBackend(ctcInfoStr)}
                ><Text>Connect</Text></Button>
            </div>
        );
    }
}

export class ApproveRequest extends React.Component {
    render() {
        return (<div><Heading>Certification Authority</Heading>
            <Text>
                Once you get the product from IBO, you will be prompted to certify it.
            </Text></div>
        );
    }
}


export class CertifyProduct extends React.Component {
    render() {
        const { resolveCertifyProduct } = this.props;

        return (
            <div><Heading>Cert Authority - Certify product (9/14)</Heading>
                <Text>
                    Do you want to certify the product?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveCertifyProduct(true)
                        //parent.certifiedProduct()
                    }}
                ><Text>Certify</Text></Button>
            </div>
        );
    }
}

export class ShipProductToIBO extends React.Component {
    render() {
        const { parent, resolveShipToIBO, to, purpose } = this.props;

        return (
            <div><Heading>Cert Authority - Ship product to IBO (10/14)</Heading>
                <Text>
                    Do you want to ship the product to {to} for the purpose of {purpose}?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveShipToIBO(true)
                        parent.finished()
                    }}
                ><Text>Ship</Text></Button>
            </div>
        );
    }
}

export class DisplayInfo extends React.Component {
    render() {

        return (
            <div><Heading>Cert Authority</Heading>
                <Text>
                    You are finished with this product lifecycle.
                </Text>

            </div>
        );

    }
}


export class AckProductReceived extends React.Component {
    render() {
        const { parent, resolveAckProductReceived } = this.props;

        return (
            <div><Heading>Cert Authority - Acknowledge received product (8/14)</Heading>
                <Text>
                    Do you want to acknowledge that you received the product?
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


export class CertWrapper extends React.Component {
    render() {
        const { cert } = this.props;
        return (
            <div className='Cert'>
                {cert}
            </div>
        );
    }
}