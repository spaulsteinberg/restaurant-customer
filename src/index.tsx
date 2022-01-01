import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { SessionProvider } from './contexts/SessionContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundary from './components/utility/ErrorBoundary';
import { HomeProvider } from './contexts/HomeContext';
import { MenuProvider } from './contexts/MenuContext';
import { BrowserRouter as Router } from 'react-router-dom'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Elements stripe={stripePromise}>
        <Provider store={store}>
          <SessionProvider>
            <HomeProvider>
              <Router>
                <MenuProvider>
                  <App />
                </MenuProvider>
              </Router>
            </HomeProvider>
          </SessionProvider>
        </Provider>
      </Elements>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
