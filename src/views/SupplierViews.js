import React from 'react';
import { Button, Heading, Text } from "rimble-ui";
import NavbarComponent from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckIcon from '@material-ui/icons/Check';
import ProgressBars from '../components/ProgressComponent';

export class RunBackend extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <div><Heading>Supplier</Heading>
                <Text>
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


export class AckProductReceived extends React.Component {
    render() {
        const { parent, terms, resolveAckProductReceived } = this.props;

        return (
            <div><Heading>Supplier - Acknowledge receiving CAD files (Step 4/14)</Heading>
                <Text>
                    Do you want to acknowledge that you received the CAD files {terms}?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveAckProductReceived(true)
                        parent.acknowledgedProduct()
                    }}
                ><Text>Accept Terms</Text></Button>
            </div>
        );
    }
}

export class ShipProduct extends React.Component {
    render() {
        const { parent, resolveShipProduct } = this.props;

        return (
            <div><Heading>Supplier - Shipping Product (Step 5/14)</Heading>
                <Text>
                    Do you want to ship the product?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveShipProduct(true)
                        parent.shippedProduct()
                    }}
                ><Text>Ship Product</Text></Button>
            </div>
        );
    }
}

export class ApproveRequest extends React.Component {
    render() {
        return (
            <div><Heading>Supplier</Heading>
                <ProgressBars />
                <Text>
                    Once you receive the CAD files, this page will update.
                </Text></div>
        );

    }
}

export class DisplayInfo extends React.Component {
    render() {

        return (

            <div className="alert alert-success" role="alert">
                <h4 class="alert-heading">Done!</h4>
                <CheckIcon />
                <Text>
                    You are finished with this product lifecycle.
                </Text>
            </div>
        );

    }
}

export class SupplierWrapper extends React.Component {
    render() {
        const { supplier } = this.props;
        return (
            <div className='Supplier'>
                <NavbarComponent />
                {supplier}
            </div>
        );
    }
}