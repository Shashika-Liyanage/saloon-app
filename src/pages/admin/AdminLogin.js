import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

 
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Successful login

      navigate("/admin");
      console.log(userCredential.user);
      toast.success("Logged in successfully.");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error("Please Enter the Username and Password");
    }
  };
  const AdminDash = (e) => {
    navigate("/AdDashboard");
  };

  return (
   
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
        <Toaster position="top-right" />
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ fontWeight: 700, fontSize: 35, color: "#5E3B4D" }}
            gutterBottom
          >
            Admin Login
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mt: "20px" }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: "20px" }}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: "20px", mb: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  onClick={AdminDash}
                >
                  Login
                  
                </Button>
                
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
