import { Component } from "react";
import { Constants } from "../../Constants";
import "./ItemDetails.css";
import { User } from "../../model/user"

class ItemDetails extends Component {

    state = {
        user: <User />
    }

    constructor() {
        super();
        this.state.user = Constants.getToLocalStorage(Constants.LOGGED_IN_USER);
    }

    onLoginClick = () => {
        const users = Constants.getToLocalStorage(Constants.DATA_USER);
        console.log('Users', users);
        const user = users.filter(account =>
            account.email === this.state.email && account.password === this.state.password
        ).map(item => item);
        if (user.length > 0) {
            this.props.setUserLoggedIn(user[0]);
            this.props.handleClose();
            alert('Welcome ' + user[0].firstName);
            return;
        }
        alert('Email or password incorrect');
    }

    onInputChange = (type, value) => {
        const userState = { ...this.state };
        if (type === Constants.EMAIL) {
            userState.email = value;
        } else if (type === Constants.PASSWORD) {
            userState.password = value;
        }
        this.setState(userState);
    }

    render() {
        return (
            <div className="details-container">
                <img alt="" className="item-details-image"
                    src={this.props.selectedProduct.image}></img>
                <p className="details-format">{this.props.selectedProduct.title}</p>
                <p className="details-format">Deliver Address: {this.state.user.address}</p>

                <p className="details-format">Seller info</p>
                <p className="details-format">Name: {this.props.selectedProduct.sellerName}</p>
                <p className="details-format">Pick-up Address: {this.props.selectedProduct.sellerAddress}</p>




            </div>
        );
    }
}

export default ItemDetails;