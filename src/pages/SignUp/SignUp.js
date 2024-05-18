import React, { useState } from "react";
import Footer from "../Footer/Footer";
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  const navigate = useNavigate();
  //const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      toast.success("Now you are Registered!!!");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log("Janith", user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Passwords do not match !!!");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <form>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "70px" }}
      >
        <Typography
          sx={{
            ml: 26,
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 50,
            mt: "100px",
            color: "#99154E",
            fontFamily: "Georgia",
          }}
        >
          Love Us,
          <br /> Register and
          <br /> getting Touch with us
        </Typography>

        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            backgroundColor: "#EED3D9",
            boxShadow: "0 20px 0px rgba(#EED3D9)",
            borderRadius: 10,
            padding: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 35,
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Sign Up
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                required
                label="First Name"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                required
                label="Phone Number"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}>
              <TextField
                required
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Conifrm Password"
                variant="outlined"
                type="password"
                onChange={(e) => setconfirmPassword(e.target.value)}
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <br></br>

          <Grid item>
            <Button
              sx={{
                mb: "10px",
                borderRadius: "20px",
                padding: "15px 30px",
                fontSize: "16px",
                backgroundColor: "#F27BBD",
                fontFamily: "Georgia",
                "&:hover": {
                  backgroundColor: "#E659A1",
                },
              }}
              size="large"
              variant="contained"
              type="submit"
              fullWidth
              onClick={onSubmit}
            >
              Register Me
            </Button>
          </Grid>
          <Toaster
            toastOptions={{
              duration: 5000,
              className: "",
              style: {
                color: "#713200",
              },
            }}
            position="top-right"
          />
        </CardContent>
      </Box>
      <Footer />
    </form>
  );
};

export default SignUp;
