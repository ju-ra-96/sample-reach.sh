import React from 'react';
import { Button, Text,Heading } from "rimble-ui";
import { ToastMessage } from 'rimble-ui';
import ProgressBars from '../components/ProgressComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

export class Wrapper extends React.Component {
    render() {
        const { app } = this.props;
        return (
            <div className="App">
                <header className="App-header" id="root">
                    {app}
                </header>
            </div>
        );
    }
}

export class ConnectAccount extends React.Component {
    render() {
        return (
            <div>
                <ProgressBars />
                <ToastMessage message={"Please wait while we connect to your account.\n" +
                    "                    Please use AlgoSigner to access ReachKey."} />

            </div>
        )
    }
}


export class SelectRole extends React.Component {
    render() {
        const { parent } = this.props;

        return (
            <div><div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/ReachKey.png`} alt="logo" />
          </div>
          <br/>
                <Heading>
                    Please select a role
                </Heading>    <br/>   
                <Text>
                    <Button
                        onClick={() => parent.selectIBO()}
                    >IBO</Button>
                    <br /> Initializes Contract and interacts will all parties.
                </Text>    <br/>  
                <Text>
                    <Button
                        onClick={() => parent.selectSupplier()}
                    >Supplier</Button>
                    <br /> Produces Product and sends it to IBO.
                </Text>    <br/>  
                <Text>
                    <Button
                        onClick={() => parent.selectCustomer()}
                    >Customer</Button>
                    <br /> Does initial payment and receives product.
                </Text>    <br/>
                <Text>
                    <Button
                        onClick={() => parent.selectCert()}
                    >Certification Authority</Button>
                    <br /> Certifies product and sends it to IBO.
                </Text>
            </div>
        );
    }
}