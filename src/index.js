import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import BookingPage from './pages/Booking/BookingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} /> 
          <Route path="booking" element={<BookingPage/>} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
