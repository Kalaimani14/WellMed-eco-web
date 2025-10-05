import "../Style/nav.css"
import atc from "../img/Navimg/Atc.svg"
import login from "../img/Navimg/login.png"
import logo from "../img/Navimg/logo.png"
import offer from "../img/Navimg/offer.svg"
import nearPharm from "../img/Navimg/nearPharm.png"
import InsurancePharm from "../img/Navimg/insurance_pharm.svg"
import labtests from "../img/Navimg/labtest.svg"
import getOff from "../img/Navimg/getOff.svg"
import docAppoinment from "../img/Navimg/docAppoinment.png"
import Carouseldata from "../Datas/Carouseldata"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import Cookies from "js-cookie";


export default function Nav() {
    const [carouselData] = useState(Carouseldata);
    const sliderRef = useRef(null);

    const userEmail = Cookies.get("userEmail"); // ✅ Get cookie value

    const scroll = (direction) => {
        if (direction === "left") {
            sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
        } else {
            sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <>
        <h5>
            Cookies
        </h5>
        <div>
             <h3>Welcome {userEmail ? userEmail : "Guest"}</h3>
        </div>

            {/* Menu */}
            <div className="container nav-1">
                <div className="max-w">
                    <ul className="grid">
                        <a href="/login">Buy Medicines</a>
                        <a href="/login">Find Doctors</a>
                        <a href="/login">Lab Tests</a>
                        <a href="/login">Membership</a>
                        <a href="/login">Health Records</a>
                        <a href="/login">Credit Card</a>
                        <a href="/login">Buy Insurance</a>
                    </ul>
                </div>
            </div>

            {/* Search */}
            <div className="container nav-2">
                <div className="max-w">
                    <h1>Search Medicines and Essentials</h1>
                    <input type="text" />
                </div>
            </div>

            {/* Shortcuts */}
            <div className="container nav-3">
                <div className="max-w grid">
                    <Link className="grid" to="/nearPharm">
                        <img src={nearPharm} alt="" />
                        <div>
                            <h5>Pharmacy near me</h5>
                            <p>Find Store</p>
                        </div>
                    </Link>
                    <Link className="grid" to="/getOff">
                        <img src={getOff} alt="" />
                        <div>
                            <h5>Get 20% Off</h5>
                            <p>Upload Now</p>
                        </div>
                    </Link>
                    <Link className="grid" to="/doctorsAppointment">
                        <img src={docAppoinment} alt="" />
                        <div>
                            <h5>Doctors Appointment</h5>
                            <p>Book now</p>
                        </div>
                    </Link>
                    <Link className="grid" to="healthInsurance">
                        <img src={InsurancePharm} alt="" />
                        <div>
                            <h5>Health Insurance</h5>
                            <p>Explore Plans</p>
                        </div>
                    </Link>
                    <Link className="grid" to="/labTests">
                        <img src={labtests} alt="" />
                        <div>
                            <h5>Lab Tests</h5>
                            <p>At Home</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Carousel */}
            <div className="container">
                <div className="slider-wrapper">
                    <button className="arrow left" onClick={() => scroll("left")}>
                        ◀
                    </button>

                    <div className="slider-container" ref={sliderRef}>
                        <div className="slider">
                            {carouselData.map((card) => (
                                <div className="card" key={card.id}>
                                    <img src={card.imgurl} alt={`Card ${card.id}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="arrow right" onClick={() => scroll("right")}>
                        ▶
                    </button>
                </div>
            </div>
        </>
    );
}
