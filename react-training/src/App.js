import React from 'react';
import Tabs from "./components/tabs/Tabs";
import "./App.css";
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Register from './screens/register/Register'
import Dialog from '@material-ui/core/Dialog';

var isLogin = false;

const App = () => {

  const [open, setOpen] = React.useState(false);

  const loginOnClick = () => {
    isLogin = true;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerOnClick = () => {
    isLogin = false;
    setOpen(true);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <Tabs>
          <div label="Home Page" >
            <div className="content">
              <Home />
            </div>
          </div>
          <div label="About Us">
            <div className="content">
              <a>About us</a>!
            </div>
          </div>
          <div label="Contact Us">
            <div className="content">
              <a>Contact us</a>!
            </div>
          </div>
        </Tabs>
        <div className="login-container">
          <a onClick={loginOnClick} className="login-style">Login</a>
          <p className="login-style"> / </p>
          <a onClick={registerOnClick} className="login-style">Sign up</a>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        {
          isLogin ? <Login /> : <Register />
        }
      </Dialog>
    </div>
  );
}

export default App;
