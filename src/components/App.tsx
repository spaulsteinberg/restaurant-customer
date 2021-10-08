import React from 'react';
import '../App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './Root';
import Routes from './Routes';
import ErrorBoundary from './utility/ErrorBoundary';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Root>
              <Routes />
            </Root>
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
