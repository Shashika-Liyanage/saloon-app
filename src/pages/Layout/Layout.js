import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css"; //
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import Logo from "../../../src/Assets/Lillylogo.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import femaleAvatar from "../../Assets/female_Avatar.png";
const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor

  const login = () => {
    navigate("/login");
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openProfile = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");

        // Show toast notification
        toast.success("You have been logged out successfully..");
      })
      .catch((error) => {
        // An error happened.

        toast.error("Error logging out. Please try again.");
      });
  };
  const disableLogout = () => {};
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
          <nav className="horizontal-nav">
            <ul>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              {/* <li>
                <Link to="/home">Home</Link>
              </li> */}
              <li>
                <Link to="/Booking">Booking</Link>
              </li>
              <li>
                <Link to="/HairPrices">Hair</Link>
              </li>
              <li>
                <Link to="/SkinPrices">Skin</Link>
              </li>
              <li>
                <Link to="/NailPrices">Nail</Link>
              </li>
              <li>
                <Link to="/BodyPrices">Body</Link>
              </li>
              <li>
                <Link to="/BridalPrices">Bridal</Link>
              </li>
              {!isLoggedIn && (
                <>
                  <button
                    id="basic-button"
                    variant="contained" // Assuming you're using Material UI
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{
                      backgroundColor: "#fff", // Adjust background color if desired
                      border: "4px solid #ccc", // Add border if needed
                      borderRadius: "20px", // Add border radius if desired
                      padding: "5px 20px", // Adjust padding if needed
                      cursor: "pointer", // Ensure clickable behavior
                      display: "flex", // Allow image to be aligned within the button
                      alignItems: "center", // Center image vertically within the button
                      mb:"28px"
                    }}
                  >
                    <img
                      src={femaleAvatar}
                      alt="Profile Avatar"
                      style={{
                        width: "30px",
                        height: "30px",
                       alignItems:"center"

                      }} // Adjust image size and margin as needed
                    />
                 
                  </button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={openProfile}>Profile</MenuItem>

                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
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
