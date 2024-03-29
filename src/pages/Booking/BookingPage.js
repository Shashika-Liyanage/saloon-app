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
import { DatePicker } from "@mui/x-date-pickers";

const BookingPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event, value) => {
    setAge(value);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Box height={700} width={900} my={8}>
        <form>
          <CardContent sx={{ alignContent: "center", textAlign: "center" }}>
            <Typography sx={{ fontWeight: 700, fontSize: 40, mt: "10px" }}>
              Book An Appointment
            </Typography>

            <Grid
              container
              spacing={3}
              justifyContent={"center"}
              sx={{ mt: "5px" }}
            >
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  required
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  required
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
              <Grid item xs={3}>
                <DatePicker
                  selected={date}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              justifyContent={"center"}
              sx={{ mt: "5px" }}
            >
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  required
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
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
                sx={{ mt: "25px", width: "430px" }}
                size="large"
                variant="contained"
              >
                Book
              </Button>
            </Grid>
          </CardContent>
        </form>
      </Box>
    </>
  );
};

export default BookingPage;
