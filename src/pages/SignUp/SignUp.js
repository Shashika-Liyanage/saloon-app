import { Autocomplete, Box, Button, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
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
    <form>
      <CardContent
        sx={{
          alignContent: "center",
          textAlign: "center",
          backgroundColor: "#dddddd", // Background color for the card
          boxShadow: "0 20px 0px rgba(0,0,0,0.1)",
          borderRadius: 8,
          padding: 4,
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: 35,  color: "#5E3B4D" }}
        >
         Sign Up
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          sx={{ mt: "5px" }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              required
              label="First Name"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
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
          justifyContent={"center"}
          sx={{ mt: "5px" }}
        >
          <Grid item xs={6}>
            {" "}
            {/* Adjusted grid width */}
            <TextField
              id="outlined-basic"
              required
              label="Phone Number"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            {" "}
            {/* Adjusted grid width */}
            <TextField
              id="outlined-basic"
              required
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          sx={{ mt: "5px" }}
        >
          <Grid item xs={6}>
          <TextField
              id="outlined-basic"
              required
              label="Password"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              id="outlined-basic"
              required
              label="Confirm Password"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
        </Grid>
      
        <Grid item>
          <Button
            sx={{ mt: "25px", width: "400px",backgroundColor:"#4E9F3D" }}
            size="large"
            variant="contained"
          >
            Register Me
          </Button>
        </Grid>
      </CardContent>
    </form>
  </Box>
  )
}

export default SignUp