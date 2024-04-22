import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css"; //
import { Menu, MenuItem, Typography } from "@mui/material";
import Logo from "../../../src/Assets/Lillylogo.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { Avatar, Button, Grid } from "@mui/material";
import instaicn from "../../Assets/instaicn.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {/* <li>
                <Link to="/home">Home</Link>
              </li> */}
              <li>
                <Link to="/booking">Booking</Link>
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
              {/* <li>
                <Link to="/admin">Temp Table2</Link>
              </li> */}
              {/* {!isLoggedIn && (
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
              )} */}
              {!isLoggedIn && (
                <>
                  <AccountCircleOutlinedIcon
                    id="basic-button"
                    variant="contained"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      fontSize: "40px",
                      mb: "20px",
                      ml: "20px",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "#D20062",
                        color: "#F8F6E3",
                      },
                      color: "black",
                    }}
                  ></AccountCircleOutlinedIcon>

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
                    <MenuItem onClick={handleClose}>My account</MenuItem>
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
