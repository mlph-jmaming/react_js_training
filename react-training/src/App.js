import React from 'react';
import "./App.css";
import Login from './screens/login/Login';
import Register from './screens/register/Register'
import Dialog from '@material-ui/core/Dialog';
import DashBoard from './screens/dashboard/DashBoard';
import LoggedInUser from './screens/logged-in-user/LoggedInUser'
import ItemDetails from './components/item-details/ItemDetails';
import { Constants } from './Constants';

var type = '';
var selectedProduct;

const App = () => {

  const [open, setOpen] = React.useState(false);
  let [user, setUser] = React.useState(Constants.getToLocalStorage(Constants.LOGGED_IN_USER));

  const loginOnClick = () => {
    type = Constants.LOGIN;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerOnClick = () => {
    type = Constants.SIGN_UP;
    setOpen(true);
  }

  const onClickBuy = productData => {
    if (user === null) {
      alert('Please login first.')
      return;
    }
    selectedProduct = productData;
    type = Constants.BUY;
    setOpen(true);
  }

  const orderOnClick = order => {
    Constants.saveToLocalStorage(Constants.ORDER, order);
    setOpen(false);
  }

  const setUserLoggedIn = (loggedInUser) => {
    setUser(loggedInUser);
  }

  const onClickLogOut = () => {
    Constants.saveToLocalStorage(Constants.LOGGED_IN_USER, null);
    setUser(null);
  }

  const isUserLoggedIn = () => {
    if (user != null) {
      return <LoggedInUser onClickBuy={onClickBuy} />

    } else {
      return <DashBoard onClickBuy={onClickBuy} />
    }
  }

  const loginLogOutButton = () => {
    if (user != null) {
      return <div className="login-container">
        <button onClick={() => onClickLogOut()} className="login-style">Logout</button>
      </div>
    }
    else {
      return <div className="login-container">
        <button onClick={loginOnClick} className="login-style">Login</button>
        <p className="login-style"> / </p>
        <button onClick={registerOnClick} className="login-style">Sign up</button>
      </div>
    }
  }

  const showDialog = () => {
    switch (type) {
      case Constants.LOGIN: {
        return <Login handleClose={handleClose} setUserLoggedIn={setUserLoggedIn} />;
      }
      case Constants.SIGN_UP: {
        return <Register handleClose={handleClose} />
      }
      case Constants.BUY: {
        return <ItemDetails selectedProduct={selectedProduct} orderOnClick={orderOnClick} />
      }
      default: {
        break;
      }
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
          showDialog()
        }
      </Dialog>
    </div>
  );
}

export default App;
