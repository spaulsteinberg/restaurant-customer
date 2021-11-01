import React from 'react';
import '../App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './Root';
import Routes from './Routes';
import ErrorBoundary from './utility/ErrorBoundary';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const App = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <Router>
            <div className="App">
              <Root>
                <Routes />
              </Root>
            </div>
          </Router>
        </Elements>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
