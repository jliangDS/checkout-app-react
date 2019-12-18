import React from 'react'
import {injectStripe} from 'react-stripe-elements'
import CardSection from './CardSection'

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
        const amount = 5000
        this.props.stripe.createToken().then(payload => {
            fetch('http://localhost:8000/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    amount: amount,
                    payload: payload
                })
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button>Confirm Subscription</button>
                </form>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm)