import { Component } from "react";
import "./OrderItem.css";

class OrderItem extends Component {

    state = {
        imageUrl: this.props.imageUrl,
        title: this.props.title,
        status: 'pending'
    }

    render() {
        return (
            <div className="item-container">
                <img alt="" className="item-image"
                    src={this.state.imageUrl}></img>
                <div>
                    <p className="center-text">{this.state.title}</p>
                    <div className="button-container ">
                        <p>Status : {this.state.status}</p>
                        <button className="view-style">View</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderItem;
