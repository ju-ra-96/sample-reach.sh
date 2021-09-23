import React from 'react';
import { Button, Heading, Text } from "rimble-ui";
import { Line } from 'rc-progress';
import NavbarComponent from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressComponent from '../components/ProgressComponent'
import CheckIcon from '@material-ui/icons/Check';

export class RunBackend extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <div><Heading>Customer</Heading>
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

export class AcceptTerms extends React.Component {
    render() {
        const { parent, terms, resolveAcceptTerms } = this.props;

        return (
            <div>
                <Heading>Customer - Accept Terms (Step 2/14)</Heading>
                <Text>
                    Do you want to accept the terms {terms}?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveAcceptTerms(true)
                        parent.acceptedTerms()
                    }}
                ><Text>Accept Terms</Text></Button>
            </div>
        );
    }
}




export class WaitingForProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "",
            step: "",

        }
        this.interval = setInterval((e) => this.updateStep(e), 2000);


    }

    async updateStep(e) {
        const status = await this.props.ctc.getViews().Main.status()
        const step = await this.props.ctc.getViews().Main.step()
        this.setState({ status, step })

    }

    render() {


        return (
            <div><Heading>Customer</Heading>
                <ProgressComponent />
                <Text>
                    Waiting for product. This will refresh when product is shipped.
                </Text><br />
                <Text>
                    <Heading>{this.state.status ? this.state.status[1] : "..."}</Heading>
                </Text>

                <Text>
                    <Heading>{this.state.step ? this.state.step[1].toString() + " / 13" : "..."}</Heading>
                </Text>  <Line percent={(this.state.step ? this.state.step[1].toNumber() : 0) * 100 / 14} strokeWidth="4" strokeColor="#D3D3D3" />


            </div>
        );
    }
}

export class ReceivedProduct extends React.Component {
    render() {
        const { parent, terms, from, resolveProductReceived } = this.props;
        return (
            <div><Heading>Customer - Confirm receiving the product (Step 13/14)</Heading>
                <Text>
                    Did you receive the product {terms} from {from}?
                </Text>

                <br />
                <Button

                    onClick={() => {
                        resolveProductReceived(true)
                        parent.finished()
                    }}
                ><Text>Accept Terms</Text></Button>
            </div>
        );
    }
}


export class Finished extends React.Component {
    render() {


        return (
            <div><Heading>Customer</Heading>
                <div className="alert alert-success" role="alert">
                    <h4 class="alert-heading">Done!</h4>
                    <CheckIcon />
                    <Text>
                        You've received the product.
                    </Text>

                </div>


            </div>
        );
    }
}


export class ApproveRequest extends React.Component {
    render() {
        const { requestStandard } = this.props;
        if (!requestStandard) {
            return (
                <div><Heading>Customer</Heading>
                    <Text>
                        Once IBO has submitted their terms,
                        you will be prompted to confirm them.
                    </Text></div>
            );
        } else {
            return (
                <Text>
                    You have received a prompt to pay IBO's requested amount.
                </Text>
            );
        }
    }
}

export class CustomerWrapper extends React.Component {
    render() {
        const { customer } = this.props;
        return (
            <div className='Customer'>
                <NavbarComponent />
                {customer}
            </div>
        );
    }
}