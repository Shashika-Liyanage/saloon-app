import React, { useState } from "react";
import { Button, CardContent, Grid, TextField, Typography, Box } from "@mui/material";
import firebaseConfig, { auth } from "../../services/firebaseConfig";

import {  useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';

const SignUp = () => {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/dashboard")

          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

    }
  return (
    <form>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "70px" }}>
        <Typography
          sx={{
            ml: 26,
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 45,
            mt: "100px",
            color: "#824D74",
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
            backgroundColor: "#dddddd",
            boxShadow: "0 20px 0px rgba(0,0,0,0.1)",
            borderRadius: 8,
            padding: 4,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 35, color: "#5E3B4D" }}>
            Sign Up
          </Typography>

          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
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
          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
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
          <Grid container spacing={3} justifyContent="center" sx={{ mt: "5px" }}>
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
              {/* <TextField
                required
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ bgcolor: "white" }}
              /> */}
            </Grid>
          </Grid>

          <Grid item>
            <Button
              sx={{ mt: "25px", width: "400px", backgroundColor: "#4E9F3D" }}
              size="large"
              variant="contained"
              type="submit"
              onClick={onSubmit}
            >
              Register Me
            </Button>
          </Grid>
        </CardContent>
      </Box>
    </form>
  );
};

export default SignUp;
