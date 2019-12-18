import React from 'react'

class MyPricing extends React.Component {

    render() {
        console.log(this.props.pricingPlans.data)

        return (
            <div className="pricing-table">
                {this.props.pricingPlans.data.map(({id, interval, amount, product: {name}}) => {
                    return (
                        <div className="tier" key={id}>
                            <h1>{name}</h1>
                            <h4>${amount/100}/{interval}</h4>
                            <button>Subscribe</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MyPricing