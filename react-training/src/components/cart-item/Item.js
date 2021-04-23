import { Component } from "react";
import "./item.css"

class Item extends Component {

    state = {
        imageUrl: this.props.imageUrl,
        title: this.props.title
    }

    render() {
        return (
            <div className="item-container">
                <img alt="" className="item-image"
                    src={this.state.imageUrl}></img>
                <div>
                    <p className="center-text">{this.state.title}</p>
                    <div className="button-container">
                        <button className="buy-style">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;
