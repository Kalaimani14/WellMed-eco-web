import "../Style/nav.css";
import atc from "../img/Navimg/Atc.svg";
import login from "../img/Navimg/login.png";
import logo from "../img/Navimg/logo.png";
import offer from "../img/Navimg/offer.svg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function TopNav(props) {

    const count = Cookies.get("count"); //  Get cookie value
  
    return (
    <>
      {/* Top Nav */}
      <div className="container nav">
        {/* <h2>{cartItems}</h2> */}
        <div className="max-w">
          <div className="grid grid-2">
            <div className="grid-sec gs-logo">
              <img src={logo} className="logo" alt="logo" />
              <h3 className="pro">Online HealthCare & Pharm</h3>
            </div>
            <div className="grid-sec grid gs-g">
              <img src={offer} className="offer" alt="offer" />
              
              {/* Cart Icon */}
              <div style={{ position: "relative" }}>
                <img
                  src={atc}
                  className="atc"
                  alt="atc"
                  onClick={() => props.openpopup()}
                />
                {/* Cart Count Badge */}
                {props.addedtocardcount > 0 && (
                  <span className="count"
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                    }}
                  >
                    {/* {props.addedtocardcount} */}{count}</span>
                )}
              </div>

              <Link to="/login" className="grid login">
                <h5>Login</h5>
                <img src={login} alt="login" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
