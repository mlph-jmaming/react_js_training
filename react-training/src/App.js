import React from 'react';
import "./App.css";
import Login from './screens/login/Login';
import Register from './screens/register/Register'
import Dialog from '@material-ui/core/Dialog';
import DashBoard from './screens/dashboard/DashBoard';
import LoggedInUser from './screens/logged-in-user/LoggedInUser'

const LOGIN = 'login';
const REGISTER = 'register';
var type = LOGIN;

const App = () => {

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState();

  const loginOnClick = () => {
    type = LOGIN;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerOnClick = () => {
    type = REGISTER;
    setOpen(true);
  }

  const setUserLoggedIn = (loggedInUser) => {
    console.log(loggedInUser);
    setUser(loggedInUser);
  }

  const isUserLoggedIn = () => {
    if (user != null) {
      return <LoggedInUser />

    } else {
      return <DashBoard />
    }
  }

  const loginLogOutButton = () => {
    if (user != null) {
      return <div className="login-container">
        <a href={() => '#'} onClick={() => setUserLoggedIn(null)} className="login-style">Logout</a>
      </div>
    }
    else {
      return <div className="login-container">
        <a href={() => '#'} onClick={loginOnClick} className="login-style">Login</a>
        <p className="login-style"> / </p>
        <a href={() => '#'} onClick={registerOnClick} className="login-style">Sign up</a>
      </div>
    }
  }

  return (
    <div className="main-container">
      <div className="center-container">
        {
          isUserLoggedIn()
        }
        {
          loginLogOutButton()
        }
      </div>

      <Dialog open={open} onClose={handleClose}>
        {
          type === LOGIN ? <Login handleClose={handleClose} setUserLoggedIn={setUserLoggedIn} /> : <Register handleClose={handleClose} />
        }
      </Dialog>
    </div>
  );
}

export default App;
