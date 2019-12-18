import React from 'react'
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {

    render() {
        return (
            <div>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </div>
        )
    }
}

export default MyStoreCheckout