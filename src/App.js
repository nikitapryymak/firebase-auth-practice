import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import AuthProvider from './contexts/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>

            <PrivateRoute exact path='/'>
              <Home /></PrivateRoute>
              
            <Route path='/signup'>
              <SignUp /></Route>
            <Route path='/login'>
              <Login /></Route>
            <Route path='/forgot-password'>
              <ForgotPassword /></Route>
              
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;