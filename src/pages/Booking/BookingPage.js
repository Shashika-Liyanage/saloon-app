import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const BookingPage = () => {
  const [branch, setBranch] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    Name: "",
    Phone,
    Number: "",
    Email: "",
    Service: "",
    Date: "",
    Time: "",
    Notes: "",
  });
  const [today, setToday] = useState("");

  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const serviceChange = (event, value) => {
    setService(value ? value.label : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleChange = (event) => {
    if (event.target.value.match(/[^0-9]/)) {
      event.preventDefault();
    }
    // otherwise, continue with the rest of your logic
    // ...
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: "70px",
      }}
    >
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
      <form onSubmit={handleSubmit}>
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
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 40,
              mt: "10px",
              color: "#FC6736",
            }}
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
                id="name"
                required
                name="Name"
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone Number"
                variant="outlined"
                inputProps={{ inputMode: "numeric" }}
                onChange={handleChange}
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
                id="email"
                name="Email"
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Branch"
                sx={{ bgcolor: "white" }}
                disabled
                value={"Negambo"}
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
                id="service"
                options={[
                  { label: "Service A" },
                  { label: "Service B" },
                  { label: "Service C" },
                  { label: "Service D" },
                  { label: "Service E" },
                ]}
                getOptionLabel={(option) => option.label}
                value={{ label: service }}
                onChange={serviceChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    name="Service"
                    variant="outlined"
                    required
                    sx={{ bgcolor: "white" }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                required
                label="Select Date"
                variant="outlined"
                type="date"
                name="Date"
                formattedDate={formattedDate}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ bgcolor: "white", width: "100%", height: "48px" }}
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
                id="time"
                required
                label="Time"
                name="Time"
                variant="outlined"
                select
                fullWidth
                SelectProps={{
                  native: true,
                }}
                sx={{ bgcolor: "white", fontWeight: "800" }}
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="notes"
                label="Notes"
                variant="outlined"
                name="Notes"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              type="submit"
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
