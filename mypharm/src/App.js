import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import HealthCon from './components/HealthCon';
import ProductDisplay from './components/ProductDisplay';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import BackEndData from './components/BackEndData';
import Cookies from 'js-cookie'; //  Import js-cookie

function App() {
  const [addedtocardcount, setaddedtocardcount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(0);
  


  //  Load cart count from cookie on initial load
  useEffect(() => {
  const savedCart = Cookies.get("cartItems");
  if (savedCart && savedCart !== "undefined") {
    try {
      const items = JSON.parse(savedCart);
      setaddedtocardcount(items.length);
    } catch (e) {
      console.error("Invalid cookie JSON:", e);
      Cookies.remove("cartItems"); // Reset if bad
      setaddedtocardcount(0);
    }
  }
}, []);

  //  Update cart count
  function headercount(count, items = []) {
    setaddedtocardcount(count);

    // Save current cart items in cookie
    Cookies.set("cartItems", JSON.stringify(items), { expires: 7 }); // expires in 7 days
  }

  return (
    <>
      {/* Top Navigation */}
      <TopNav
        addedtocardcount={addedtocardcount} // Pass count as prop
        openpopup={() => setpopupstatus(1)}
      />

      {/* Routing for login/signup */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Nav />
      <HealthCon />

      {/* Backend Product Data */}
      <BackEndData
        headercount={headercount} // Pass function to update cart count & cookie
        popupstatus={popupstatus}
        popupclose={() => setpopupstatus(0)}
      />

      <h1> App components</h1>
      <Footer />
    </>
  );
}

export default App;
