import { GridList } from "@material-ui/core";
import { Component } from "react";
import Item from "../../components/cart-item/Item";
import "./Home.css"

const tileData = [
    {
        id: 1,
        image: "https://www.gizmochina.com/wp-content/uploads/2020/09/Snapdragon-750G.jpg",
        title: "Qualcomm Processor"
    },
    {
        id: 2,
        image: "https://i.ytimg.com/vi/_X3_uZSEfQo/maxresdefault.jpg",
        title: "Best blender"
    }
    , {
        id: 3,
        image: "https://qph.fs.quoracdn.net/main-qimg-80f9d3bcd38a461b08cbe52f4b13dca0.webp",
        title: "Inter core i7 Processor"
    },
    {
        id: 4,
        image: "https://static.digit.in/default/0cf2958a6d320d63675714cb9d67050be37c8753.jpeg",
        title: "China Android Phone"
    }, {
        id: 5,
        image: "https://static.digit.in/default/af95abb7dda55996880198f9507dfcf0e87368fe.jpeg",
        title: "Samsung Android"
    },
    {
        id: 6,
        image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/127664-csdgcybqaf-1568959931.jpg",
        title: "Buy 1 take 3"
    },
    {
        id: 7,
        image: "https://cdn.mos.cms.futurecdn.net/wVGsPeyZgPdC4ior5Dc8wc.jpg",
        title: "Android 10 mobile phone"
    },
    {
        id: 8,
        image: "https://www.zdnet.com/a/hub/i/r/2019/05/24/4444c3cd-36d5-4b81-a1c2-b817f6383226/resize/1200x900/2eae6eac09800e8cd03d48f60170f033/microsoft-launcher-android.jpg",
        title: "New Smart phone"
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
                                <Item key={data.id} cart={data.image} imageUrl={data.image} title={data.title} />
                            </ul>
                        )
                    }
                </GridList>
            </div>
        );
    }
}

export default Home;