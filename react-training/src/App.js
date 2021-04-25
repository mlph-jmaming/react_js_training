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
  const [user, setUser] = React.useState(Constants.getToLocalStorage(Constants.LOGGED_IN_USER));
  const [orders, setOrders] = React.useState(Constants.getToLocalStorage(Constants.ORDER) == null ? [] : Constants.getToLocalStorage(Constants.ORDER));

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

  const onViewOrder = selectedOrder => {
    selectedProduct = selectedOrder;
    type = Constants.VIEW_ORDER;
    setOpen(true);
  }

  const orderOnClick = order => {
    const newOrders = orders;
    newOrders.push(order);
    setOrders(newOrders);
    Constants.saveToLocalStorage(Constants.ORDER, orders);
    setOpen(false);
  }

  const orderReceive = orderItem => {
    const oldRecord = Constants.getToLocalStorage(Constants.ORDER);
    var commentIndex = oldRecord.findIndex(function (c) {
      return c.id === orderItem.id;
    });

    oldRecord[commentIndex].status = Constants.STATUS_COMPLETED;
    Constants.saveToLocalStorage(Constants.ORDER, oldRecord);
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
      return <LoggedInUser onClickBuy={onClickBuy} onClickViewOrder={onViewOrder} />

    } else {
      return <DashBoard onClickBuy={onClickBuy} onClickViewOrder={onViewOrder} />
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
      case Constants.BUY:
      case Constants.VIEW_ORDER:
        return <ItemDetails selectedProduct={selectedProduct} orderOnClick={orderOnClick} orderReceive={orderReceive} />
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
