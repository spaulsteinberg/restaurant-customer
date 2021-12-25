import { useEffect } from 'react';
import '../App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root';
import { useSelector } from 'react-redux';
import  { RootState } from '../redux/store';
import { ISessionContext, useSession } from '../contexts/SessionContext';

const App = () => {
  const { sessionId, setOrFetchSession } = useSession() as ISessionContext
  const complete = useSelector<RootState, boolean>(state => state.checkout.hasCompletedOrder)
  console.log('[APP]', sessionId, complete)

  useEffect(() => {
    if (!sessionId && !complete) setOrFetchSession()

  }, [sessionId, complete, setOrFetchSession])

  return (
    <Router>
      <div className="App">
        <Root sessionId={sessionId} />
      </div>
    </Router>
  );
}

export default App;
