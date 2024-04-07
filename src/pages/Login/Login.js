import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import GoogleIconButton from "../../Components/GoogleButton";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State variables to store username and password
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Function to handle Google sign-in
  const logGoogleUser = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in success:", result);
      // Redirect user to dashboard page after successful sign-in
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const onSignUp=(e)=>{
    navigate("/signup");
  }
  // // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if username and password are not empty
  //   if (!credentials.username || !credentials.password) {
  //     console.log("Username and password are required");
  //     return; // Exit the function if fields are empty
  //   }

  //   // Here you can add your logic to handle login (e.g., sending credentials to a server for authentication)
  //   console.log("Credentials:", credentials);
  //   // For simplicity, let's just clear the form fields after submission
  //   setCredentials({ username: "", password: "" });

  //   // Redirect user to dashboard page after successful submission
  //   window.location.href = "/dashboard";
  // };

  // // Function to handle input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setCredentials({ ...credentials, [name]: value });
  // };
  // const handleSignUpClick = (e) => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ fontWeight: 700, fontSize: 35, color: "#5E3B4D" }}
            gutterBottom
          >
            Login
          </Typography>
          <form >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
        
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  fullWidth
                  onClick={onLogin}
                >
                  Login
                </Button>
              </Grid>
              <Grid item sx={{ alignItems: "center", ml: "55px", mt: "10px" }}>
                <Button
                  onClick={onLogin}
                  color="primary"
                  style={{ textTransform: "none", mt: "25px" }}
                >
                  <Typography variant="body1" onClick={onSignUp}>
                    Don't have an account? Sign Up
                  </Typography>
                </Button>
              </Grid>

              <Grid container justifyContent="center" sx={{ mt: "10px" }}>
                <Grid item style={{ alignItems: "center" }}>
                  <Typography variant="h7">OR</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item style={{ flexStart: "center" }}>
                    <Tooltip title="Sign in with Google">
                      <Button
                        aria-label="googleicon"
                        size="extra-large"
                        sx={{
                          textTransform: "none",
                          color: "black",
                          fontWeight: "520",
                        }}
                        onClick={logGoogleUser}
                        type="submit"
                        fullWidth
                        startIcon={<GoogleIconButton icon={faGoogle} />}
                      >
                        Continue with Google
                      </Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
