import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
    render() {
        return (
            <div>
                <p>4242 4242 4242 4242</p>
                <label>
                    Card Details
                    {/* remove hidePostalCode */}
                    <CardElement hidePostalCode={true}/>
                </label>
            </div>
        )
    }
}

export default CardSection