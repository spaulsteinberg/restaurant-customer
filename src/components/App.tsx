import React from 'react';
import '../App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './Root';
import Routes from './Routes';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Root>
          <Routes />
        </Root>
      </div>
    </Router>
  );
}

export default App;
