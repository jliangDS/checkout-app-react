import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
import CardForm from './components/CardForm';
import Checkout from './components/Checkout';
import Pricing from './components/Pricing';
import './App.css';

class App extends React.Component {

  state = {
    checkoutPlan: null,
    complete: false,
    pricingPlans: null,
  }

  componentDidMount() {
    fetch('http://localhost:8000/api')
    .then(response => response.json())
    .then(pricing => this.setState({pricingPlans: pricing}))
  }

  render() {
    let page; 

    if (this.state.pricingPlans == null) {
      page = <div></div>
    }

    else {
      page = 
      <div className="pricing-table">
        {this.state.pricingPlans.data.map(({id, interval, amount, product: {name}}) => {
          return ( 
            <div className="tier" key={id}>
              <h1>{name}</h1>
              <h4>${amount/100}/{interval}</h4>
              <button onClick={this.props.onPlanSelect(id)}>Get Started</button>
            </div>
            )
        })}
      </div>
    }
    return (
      <StripeProvider apiKey="pk_test_kQmNCX01JOkO75Vkrm66CyUv00CDtR3bfr">
        <div>
          {page}
          <CardForm />
          <Checkout />
          <Pricing />
        </div>
      </StripeProvider>
    );
  }
}

export default App;
