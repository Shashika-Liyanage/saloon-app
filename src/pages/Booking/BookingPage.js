import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const BookingPage = () => {
  // const [age, setAge] = useState();
  const[branch,setBracnh]=useState()
  const[service,setService]=useState()
  // const handleChange = (event, value) => {
  //   setAge(value);
  // };
const branchChange=(event,value)=>{
  setBracnh(value)
}
const serviceChange=(event,value)=>{
  setService(value)
}
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: "70px" }}>
      <Typography
        sx={{
          ml: 26,
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          fontSize: 50,
          mt: "100px",
          color: "#824D74",
        }}
      >
        we style,
        <br /> while
        <br /> you
        <br /> smile
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
            sx={{ fontWeight: 700, fontSize: 40, mt: "10px", color: "#FC6736" }}
          >
            Book An Appointment
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
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                required
                label="Enter Phone Number"
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
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
              {/* Adjusted grid width */}
              <Autocomplete
                id="demo-simple-select-helper"
                options={[
                  {label: "Gampaha" },
                  {label: "Veyangoda" },
                  {label: "Naiwala" },
                  {label: "Minuwangoda" },
                  {label: "Colombo" },
                ]}
       
                getOptionLabel={(option) => option.label}
                value={branch}
                defaultValue={{label:"Gampaha"}}
                onChange={branchChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Branch"
                    variant="outlined"
                    required
                    
                    sx={{ bgcolor: "white" }}
                  />
                )}
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
              <Autocomplete
                id="demo-simple-select-helper"
                options={[
                  {label: "Gampaha" },
                  {label: "Veyangoda" },
                  {label: "Naiwala" },
                  {label: "Minuwangoda" },
                  {label: "Colombo" },
                ]}
                getOptionLabel={(option) => option.label}
                value={service}
                onChange={serviceChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    variant="outlined"
                    required
                    sx={{ bgcolor: "white" }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
                id="outlined-basic"
                required
                label="Select Date"
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
                label="Time"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Notes"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: "25px", width: "400px" }}
              size="large"
              variant="contained"
            >
              Book
            </Button>
          </Grid>
        </CardContent>
      </form>
    </Box>
  );
};

export default BookingPage;
