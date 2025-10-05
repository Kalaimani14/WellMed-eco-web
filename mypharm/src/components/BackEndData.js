import { useEffect, useState } from "react";
import axios from "axios";
import "../Style/productdisplay.css";
import Popup from "./Popup";
import Cookies from "js-cookie"; //  Import js-cookie

export default function BackEndData(props) {
  const [data, setData] = useState([]);
  const [selectitem, setSelectItem] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/getallproduct")
      .then((response) => {
        setData(response.data);

        // Load cart from cookie safely
        const savedCart = Cookies.get("cartItems");
        if (savedCart && savedCart !== "undefined") {
          try {
            const savedItems = JSON.parse(savedCart);
            // Mark items as already added in data
            const updatedData = response.data.map((item) => {
              const found = savedItems.find(
                (i) => i.productname === item.productname
              );
              return found
                ? { ...item, addedtocard: 1, order: found.order }
                : item;
            });

            setData(updatedData);
            setSelectItem(savedItems);
            props.headercount(savedItems.length, savedItems);
          } catch (e) {
            console.error("Invalid cookie JSON:", e);
            Cookies.remove("cartItems"); // reset bad cookie
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Add to Cart Function
  function AddedToCart(product) {
    const updatedData = data.map((item) =>
      item.productname === product.productname
        ? { ...item, addedtocard: 1, order: 1 } // consistent property
        : item
    );

    //  filter using correct property
    const selectedItems = updatedData.filter((item) => item.addedtocard === 1);

    setSelectItem(selectedItems);
    setData(updatedData);
    //  Update header and cookies
    props.headercount(selectedItems.length,selectedItems);
    // Cookies.set("count", selectedItems.length, { expires: 7 });
  }

  // Increase Quantity
  function popIncrement(product) {
    const updatedItems = selectitem.map((item) =>
      item.productname === product.productname
        ? { ...item, order: item.order + 1 }
        : item
    );

    setSelectItem(updatedItems);
    props.headercount(updatedItems.length, updatedItems);
    Cookies.set("cartItems", JSON.stringify(updatedItems), { expires: 7 });
  }

  // Decrease Quantity
  function popDecrement(product) {
    const updatedItems = selectitem.map((item) =>
      item.productname === product.productname && item.order > 0
        ? { ...item, order: item.order - 1 }
        : item
    );

    setSelectItem(updatedItems);
    props.headercount(updatedItems.length, updatedItems);
    Cookies.set("cartItems", JSON.stringify(updatedItems), { expires: 7 });
  }

  return (
    <div className="container max-w">
      <div className="product-grid">
        {data.map((p) => (
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
            <button className="add-btn" onClick={() => AddedToCart(p)}>{p.addedtocard === 1 ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      <Popup
        selectitem={selectitem}
        popupstatus={props.popupstatus}
        popupclose={props.popupclose}
        popIncrement={popIncrement}
        popDecrement={popDecrement}
      />
    </div>
  );
}
