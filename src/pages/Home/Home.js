import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    
    signOut(auth)
      .then(() => {
        
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
        // Show toast notification
        toast.success('Logged out successfully.');
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error logging out"); // Display error toast if sign-out fails
      });
  };
  
  return (
    <>
     
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>
          <Toaster position="top-right"/>
        </div>
    
     
    </>
  );
};

export default Home;
