import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './components/MyStoreCheckout';
import MyPricing from './components/MyPricing';
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
    } else {
      page = <MyPricing pricingPlans={this.state.pricingPlans} />
    }

    return (
      <StripeProvider apiKey="pk_test_kQmNCX01JOkO75Vkrm66CyUv00CDtR3bfr">
        <div>
          {page}
          <MyStoreCheckout />
        </div>
      </StripeProvider>
    );
  }
}

export default App;