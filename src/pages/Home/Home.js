import React, { useEffect, useState } from "react";
//import { signOut } from "firebase/auth";
//import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import bg from "../../Assets/salonBg.jpg";

const Home = () => {
  //const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const generateRandomColor = (data) => {
    //   const hash = data.split("").reduce((acc, char) => {
    //     return char.charCodeAt(0) + ((acc << 5) - acc);
    //   }, 0);

    //   // Generate a full 6-digit hexadecimal color code
    //   const color =
    //     "#" +
    //     ("000000" + ((hash & 0x00ffffff) | 0xa0a0a0).toString(16)).slice(-6);
    //   console.log("Generated Color:", color); // Check the generated color
    //   return color;
    // };

    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
      if (userData) {
        // const color = generateRandomColor(userData.email);
        // Use the color if needed
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once

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

  return (
    <>
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
          alt="ImN"
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
