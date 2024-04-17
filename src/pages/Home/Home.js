import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { Avatar, Button, Grid } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");

        // Show toast notification
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        // An error happened.

        toast.error("Error logging out. Please try again.");
      });
  };

  // Function to extract first part of the email address before the "@"
  const getFirstNameFromEmail = (email) => {
    return email.split("@")[0];
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 156, height: 156 }}
        />
      </Grid>

      <Grid container alignItems="center" justifyContent="center">
      <Grid alignText="center">
        <h1 style={{color:"#824D74"}}>Hello </h1>
        <div style={{ display: "block",color:"#824D74" ,fontWeight:"bold"}}>
          {user && <h1>{getFirstNameFromEmail(user.email)}</h1>}
        </div>
        <div>
          <Button variant="contained" onClick={handleLogout}>
            Log out
          </Button>
          <Toaster position="top-right" />
        </div>
      </Grid>
      </Grid>
    </>
  );
};

export default Home;
