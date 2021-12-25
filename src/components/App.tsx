import { useEffect } from 'react';
import '../App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root';
import ErrorBoundary from './utility/ErrorBoundary';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ISessionContext, useSession } from '../contexts/SessionContext';

const App = () => {
  const { sessionId, setOrFetchSession } = useSession() as ISessionContext
  console.log('[APP]', sessionId)

  useEffect(() => {
    if (!sessionId) setOrFetchSession()

  }, [sessionId, setOrFetchSession])

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Root sessionId={sessionId} />
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
