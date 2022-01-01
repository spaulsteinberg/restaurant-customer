import { useEffect } from 'react';
import '../App.scss';
import Root from './Root';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ISessionContext, useSession } from '../contexts/SessionContext';

const App = () => {
  const { sessionId, setOrFetchSession } = useSession() as ISessionContext
  const complete = useSelector<RootState, boolean>(state => state.checkout.hasCompletedOrder)

  useEffect(() => {
    if (!sessionId && !complete) setOrFetchSession()

  }, [sessionId, complete, setOrFetchSession])

  return (
    <div className="App">
      <Root sessionId={sessionId} />
    </div>
  );
}

export default App;
