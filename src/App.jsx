import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import NotAuthorised from './pages/NotAuthorised';
import { useAuthCtx } from './store/AuthContext';

function App() {
  // App priklausomai nuo isUserLoggedIn generuoti routus
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/auth'>
          {!isUserLoggedIn ? <AuthPage /> : <Redirect to='/' />}
        </Route>
        <ProtectedRoute path='/profile'>
          <UserProfile />
        </ProtectedRoute>
      </Switch>
    </Layout>
  );
}

export default App;
