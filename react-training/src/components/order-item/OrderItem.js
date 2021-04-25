import { Component } from "react";
import "./OrderItem.css";

class OrderItem extends Component {

    render() {
        return (
            <div className="item-container">
                <img alt="" className="item-image"
                    src={this.props.data.image}></img>
                <div>
                    <p className="center-text">{this.props.data.productName}</p>
                    <div className="button-container ">
                        <p>Status : {this.props.data.status}</p>
                        <button onClick={() => this.props.onClickViewOrder()} className="view-style">View</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderItem;
