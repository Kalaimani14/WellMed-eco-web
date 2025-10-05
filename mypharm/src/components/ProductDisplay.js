import "../Style/productdisplay.css"
import { useState } from "react";
import ProductDatas from "../Datas/ProductData"; // your 50 products

export default function ProductDisplay(props) {
    const [products, setProducts] = useState(ProductDatas);
    const[select,setselectitem]=useState();

      //..............Added to card................ 

    function Addedtocard(card) {

        const Changedproduct = products.map((val) => {
            if (card.productname == val.productname) {
                return { ...val, addedtocard: 1 }
            } else return val;
        })

        const select = Changedproduct.filter((val) => val.addedtocard === 1  )

        setselectitem(select);
        props.headercount(select.length);
        setProducts(Changedproduct);
    }
    
    return (
        <>
            <div className="product-grid">
                {
                    products.map((p) => (
                        <div className="product-card" key={p.id}>
                            {/* Product Image */}
                            <img src={p.imgurl} alt={p.productname} className="product-img" />

                            {/* Product Info */}
                            <h3 className="product-title">{p.productname}</h3>
                            <p className="product-category">{p.category}</p>

                            {/* Price Section */}
                            <div className="price-row">
                                <span className="discount-price">₹{p.discountprice}</span>
                                <span className="actual-price">₹{p.actualprice}</span>
                            </div>

                            {/* Quantity */}
                            <p>Quantity: {p.quantity}</p>

                            {/* Add to Cart Button */}
                            <button className="add-btn" onClick={()=>{Addedtocard(p)}}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
