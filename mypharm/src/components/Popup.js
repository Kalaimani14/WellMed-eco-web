import { useState } from "react";
import "../Style/popup.css";
import "../Style/table.css";

export default function Popup(props) {
  
  // Calculate total amount

  const totalAmount = props.selectitem.reduce(
    (sum, val) => sum + val.discountprice * val.order,
    0
  );

  if (props.popupstatus !== 1) return null; // No popup if status is not 1

  return (
    <div className="popup">
      <div className="popup-data">
        <button onClick={props.popupclose} className="close">X</button>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Img</th>
              <th>Product</th>
              <th>Quantity</th>
              <th colSpan="3">Price</th>
            </tr>
          </thead>
          <tbody>
            {props.selectitem.map((val, index) => (
              <tr key={index}>
                <td className="ta">{index + 1}</td>
                <td><img className="ppimg" src={val.imgurl} alt={val.productname} /></td>
                <td className="ta">{val.productname}</td>
                <td className="ta">{val.order * val.quantity}</td>
                <td className="ta">{val.order * val.discountprice} rs</td>
                <td className="ta"><button onClick={() => props.popIncrement(val)}>+</button></td>
                <td className="ta"><button onClick={() => props.popDecrement(val)}>-</button></td>
              </tr>
            ))}
            <tr>
              <td className="amt" colSpan="2">Total = </td>
              <td className="amt" colSpan="5">{totalAmount} rs</td>
            </tr>
            <tr>
              <td className="buy" colSpan="7">
                <button className="buy-btn">Buy Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
