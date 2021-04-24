import { Component } from "react";
import { Constants } from "../../Constants";
import "./ItemDetails.css";
import { User } from "../../model/user"

class ItemDetails extends Component {

    state = {
        user: <User />,
        order: {
            productId: 0,
            userId: 0,
            quantity: 0
        }
    }

    constructor() {
        super();
        this.state.user = Constants.getToLocalStorage(Constants.LOGGED_IN_USER);
    }

    onInputChange(quantity) {
        const userState = { ...this.state };
        userState.order.quantity = quantity;
        this.setState(userState);
    }

    onClickOrder() {
        if (this.state.order.quantity === 0) {
            alert('Please add quantity.');
            return;
        }
        const order = { ...this.state.order };
        order.productId = this.props.selectedProduct.id;
        order.userId = this.state.user.id;
        this.props.orderOnClick(order);
    }

    render() {
        return (
            <div className="details-container">
                <img alt="" className="item-details-image"
                    src={this.props.selectedProduct.image}></img>
                <p className="details-format">{this.props.selectedProduct.productName}</p>
                <p className="details-format">Price : P {this.props.selectedProduct.productPrice}</p>
                <p className="details-format">Quantity : <input onChange={(e) => this.onInputChange(e.target.value)} type="number"></input></p>
                <p className="details-format">Total : {this.props.selectedProduct.productPrice * this.state.order.quantity}</p>
                <p className="details-format">Deliver Address : {this.state.user.address}</p>
                <br />
                <p className="details-format">Seller info</p>
                <p className="details-format">Name : {this.props.selectedProduct.sellerName}</p>
                <p className="details-format">Pick-up Address : {this.props.selectedProduct.sellerAddress}</p>

                <button onClick={() => this.onClickOrder()} className={"button-buy"}>Buy</button>

            </div>
        );
    }
}

export default ItemDetails;