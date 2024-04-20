import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import BookingPage from "./pages/Booking/BookingPage";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HairPrice from "./pages/PriceList/HairPrice";
import SkinPrice from "./pages/PriceList/SkinPrice";
import NailPrice from "./pages/PriceList/NailPrice";
import Bodyprice from "./pages/PriceList/BodyPrice";
import BridalPrice from "./pages/PriceList/BridalPrice";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}/> 
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="tableshowing1" element={<HairPrice />} />
        <Route path="tableshowing2" element={<SkinPrice />} />
        <Route path="tableshowing3" element={<NailPrice />} />
        <Route path="tableshowing4" element={<Bodyprice />} />
        <Route path="tableshowing5" element={<BridalPrice />} />
        
        
        

        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
