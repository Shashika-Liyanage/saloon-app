import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { Avatar, Button, Grid } from "@mui/material";
import bg from "../../Assets/salonBg.jpg";
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [avatarColor, setAvatarColor] = useState("#000"); //default color for avatar

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
      if (userData) {
        setAvatarColor(generateRandomColor(userData.email));
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
    };
  }, []);

  // Function to generate a random color based on user data
  const generateRandomColor = (data) => {
    const hash = data.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    // Generate a full 6-digit hexadecimal color code
    const color =
      "#" +
      ("000000" + ((hash & 0x00ffffff) | 0xa0a0a0).toString(16)).slice(-6);
    console.log("Generated Color:", color); // Check the generated color
    setAvatarColor(color); // Ensure avatarColor is being set
    return color;
  };
  // Function to extract first part of the email address before the "@"
  const getFirstNameFromEmail = (email) => {
    return email.split("@")[0];
  };
  // Function to get the first letter of the first name
  const getFirstLetter = (name) => {
    return name.charAt(0).toUpperCase();
  };
  return (
    <>
      {/* <img className="img" width="auto" height="500px" src={bg} alt="image" /> */}
      <div
        style={{
          position: "flex-start",
          textAlign: "flex-start",
          backgroundColor: "#D20065",
          borderBottomLeftRadius: "250px",
          borderBottomRightRadius: "250px",
          overflow: "hidden",
        }}
        
      >
          <Avatar
          alt={user ? getFirstLetter(getFirstNameFromEmail(user.email)) : ""}
          src="/static/images/avatar/1.jpg"
          sx={{
            width: 156,
            height: 156,
            fontSize: "90px",
            backgroundColor: avatarColor,
          }}
        />
 


    
          <h1 style={{ color: "#824D74" }}>Hello </h1>
          <div
            style={{ display: "block", color: "#824D74", fontWeight: "bold" }}
          >
            {user && <h1>{getFirstNameFromEmail(user.email)}</h1>}
          </div>
          {/* <div>
            <Button
              sx={{ alignContent: "center" }}
              variant="contained"
              onClick={handleLogout}
            >
              Log out
            </Button>
            <Toaster position="top-right" />
          </div> */}

        {" "}
        {/* Add background color */}
        <img
          className="img"
          width="50%"
          height="auto"
          alignItems="left"
          src={bg}
          alt="image"
          style={{
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "280px",
          }}
        />
        
        </div>

      
  
    </>
  );
};

export default Home;
