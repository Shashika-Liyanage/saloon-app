import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { Avatar, Button, Grid } from "@mui/material";
import bg from "../../Assets/salonBg.jpg";
import Image2 from "../../../src/Assets/Welcome.png";
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
    // Use a regular expression to match only alphanumeric characters before the "@" symbol
    const cleanEmail = email.match(/^[a-zA-Z]+/);
    // Check if cleanEmail is not null
    if (cleanEmail) {
      // Return the matched alphanumeric characters
      return cleanEmail[0];
    } else {
      // Return an empty string if no match is found
      return "";
    }
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
        {" "}
        {/* Add background color */}
        <img
          className="img"
          width="30%"
          height="auto"
          alignItems="left"
          src={bg}
          alt="image"
          style={{
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "280px",
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "150px",
            left: "70%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center", // Center items vertically
            fontSize: "56px",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          <span>Hello</span> {/* "Hello" text */}
          <span
            role="img"
            aria-label="wave"
            style={{ fontSize: "56px", marginLeft: "20px" }} // Adjust spacing between "Hello" and emoji
          >
            👋
          </span>
          {user && (
            <h4 style={{ marginLeft: "10px" }}>
              {getFirstNameFromEmail(user.email)}
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
