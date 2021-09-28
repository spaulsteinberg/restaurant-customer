import React from 'react';
import '../App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './Root';
import Routes from './Routes';
import ErrorBoundary from './utility/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Root>
            <Routes />
          </Root>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
