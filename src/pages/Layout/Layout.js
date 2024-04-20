import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css"; //
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const headerStyle = {
    height: "80px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
  };

  const salonNameStyle = {
    marginRight: "auto",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  return (
    <>
      <div style={headerStyle}>
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
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    fontWeight: "700",
                    "&:hover": { backgroundColor: "#D20062", color: "#F8F6E3" },
                    color: "black",
                  }}
                  onClick={login}
                >
                  Login
                </Button>
              </li>
            </ul>
          </nav>

          <Outlet />
        </Typography>
      </div>
    </>
  );
};

export default Layout;
