import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css"; //
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../src/Assets/Lillylogo.png";

const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn to false

  const login = () => {
    navigate("/login");
  
  };

  const headerStyle = {
    height: "100px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Align content to the left and right edges
    padding: "0 20px",
  };

  const salonNameStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <div style={headerStyle}>
        <div>
          <Link to="/dashboard">
            <img className="img" width="30%" src={Logo} alt="image" />
          </Link>
        </div>
        <Typography
          variant="h6"
          sx={{ mt: "5px" }}
          component="h6"
          style={salonNameStyle}
        >
          <nav className="horizontal-nav" style={navStyle}>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/booking">BookingPage</Link>
              </li>
              <li>
                <Link to="/tableshowing1">Hair</Link>
              </li>
              <li>
                <Link to="/tableshowing2">Skin</Link>
              </li>
              <li>
                <Link to="/tableshowing3">Nail</Link>
              </li>
              <li>
                <Link to="/tableshowing4">Body</Link>
              </li>
              <li>
                <Link to="/tableshowing5">Bridal</Link>
              </li>
              <li>
                <Link to="/admin">Temp Table2</Link>
              </li>
              {isLoggedIn && ( 
                <li>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "#D20062",
                        color: "#F8F6E3",
                      },
                      color: "black",
                    }}
                    onClick={login}
                  >
                    Login
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </Typography>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
