import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
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

      navigate("/Admin");
    } catch (error) {
      toast.error("Passwords do not match !!!");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const isFormFilled = () => {
    return email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "";
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled()) {
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <form>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "70px" }}
      >
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
              color: "#5E3B4D",
              color: "#99154E",
              fontFamily: "Georgia",
            }}
          >
            Create an Admin
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
              disabled={!isFormFilled()}
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

export default AddAdmin;
