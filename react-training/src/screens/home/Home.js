import { GridList } from "@material-ui/core";
import { Component } from "react";
import Item from "../../components/cart-item/Item";
import "./Home.css"

const tileData = [
    {
        id: 1,
        image: "https://www.gizmochina.com/wp-content/uploads/2020/09/Snapdragon-750G.jpg",
        productName: "Qualcomm Processor",
        sellerName: "Seller 1",
        sellerAddress: "seller address 1",
        productPrice: 100
    },
    {
        id: 2,
        image: "https://i.ytimg.com/vi/_X3_uZSEfQo/maxresdefault.jpg",
        productName: "Best blender",
        sellerName: "Seller 2",
        sellerAddress: "seller address 2",
        productPrice: 150
    }
    , {
        id: 3,
        image: "https://qph.fs.quoracdn.net/main-qimg-80f9d3bcd38a461b08cbe52f4b13dca0.webp",
        productName: "Inter core i7 Processor",
        sellerName: "Seller 3",
        sellerAddress: "seller address 3",
        productPrice: 200
    },
    {
        id: 4,
        image: "https://static.digit.in/default/0cf2958a6d320d63675714cb9d67050be37c8753.jpeg",
        productName: "China Android Phone",
        sellerName: "Seller 4",
        sellerAddress: "seller address 4",
        productPrice: 250
    }, {
        id: 5,
        image: "https://static.digit.in/default/af95abb7dda55996880198f9507dfcf0e87368fe.jpeg",
        productName: "Samsung Android",
        sellerName: "Seller 5",
        sellerAddress: "seller address 5",
        productPrice: 300
    },
    {
        id: 6,
        image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/127664-csdgcybqaf-1568959931.jpg",
        productName: "Buy 1 take 3",
        sellerName: "Seller 6",
        sellerAddress: "seller address 6",
        productPrice: 350
    },
    {
        id: 7,
        image: "https://cdn.mos.cms.futurecdn.net/wVGsPeyZgPdC4ior5Dc8wc.jpg",
        productName: "Android 10 mobile phone",
        sellerName: "Seller 7",
        sellerAddress: "seller address 7",
        productPrice: 400
    },
    {
        id: 8,
        image: "https://www.zdnet.com/a/hub/i/r/2019/05/24/4444c3cd-36d5-4b81-a1c2-b817f6383226/resize/1200x900/2eae6eac09800e8cd03d48f60170f033/microsoft-launcher-android.jpg",
        productName: "New Smart phone",
        sellerName: "Seller 8",
        sellerAddress: "seller address 8",
        productPrice: 500
    }
];

class Home extends Component {

    render() {
        console.log("Home");
        return (
            <div className="grid-container">
                <GridList cols={3} cellHeight={250} style={{ height: 'auto' }} >
                    {
                        tileData.map(data =>
                            <ul key={data.id}>
                                <Item key={data.id} productData={data} onClickBuy={this.props.onClickBuy} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default Home;