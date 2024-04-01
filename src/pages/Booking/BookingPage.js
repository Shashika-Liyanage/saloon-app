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
  const [age, setAge] = useState("");

  const handleChange = (event, value) => {
    setAge(value);
  };

  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
    <Typography  sx={{ml:26, textTransform: 'uppercase',  textAlign: 'center', fontWeight: 700, fontSize: 50, mt: "100px", color: "#824D74" }}>
     we style,<br />  while<br/> you<br/> smile
    </Typography>
      <form>
        <CardContent
          sx={{
            alignContent: "center",
            textAlign: "center",
            color: "#513162",
            boxShadow: "0 20px 0px rgba(0,0,0,0.1)",
            borderRadius: 8,
            padding: 4,
            "&:hover": {
              backgroundColor: "#dddddd", // Change background color on hover
              color: "#F8F6E3", // Change text color on hover
            },
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 40, mt: "10px" ,color:"#FC6736"}}>
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                required
                label="Enter Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={6}> {/* Adjusted grid width */}
              <TextField
                id="outlined-basic"
                required
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}> {/* Adjusted grid width */}
              <Autocomplete
                id="demo-simple-select-helper"
                options={[
                  { value: 10, label: "Gampaha" },
                  { value: 20, label: "Veyangoda" },
                  { value: 30, label: "Naiwala" },
                  { value: 30, label: "Minuwangoda" },
                  { value: 30, label: "Colombo" },
                ]}
                getOptionLabel={(option) => option.label}
                value={age}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Branch"
                    variant="outlined"
                    required
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
                  { value: 10, label: "Gampaha" },
                  { value: 20, label: "Veyangoda" },
                  { value: 30, label: "Naiwala" },
                  { value: 30, label: "Minuwangoda" },
                  { value: 30, label: "Colombo" },
                ]}
                getOptionLabel={(option) => option.label}
                value={age}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}></Grid>
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
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                required
                label="Name"
                variant="outlined"
                fullWidth
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
