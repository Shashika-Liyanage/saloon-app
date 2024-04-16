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
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BookingPage = () => {
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Service: "",
    Date: new Date().toISOString().split("T")[0],
    Time: "",
    Notes: "",
  });
  const navigate = useNavigate();
  let name, value;
  console.log(user, "janith");
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getdata = async (e) => {
    const { Name, Phone, Email, Service, Date, Time, Notes } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected typo
      },
      body: JSON.stringify({ Name, Phone, Email, Service, Date, Time, Notes }),
    };

    const res = await fetch(
      "https://he-and-she-356f5-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    console.log(res);
    if (res.ok) {
      //navigate("/dashboard");
      toast.success("Booking has been made");
      
    } else {
      toast.error("Something went wrong");
    }
  };

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

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // Event handler for service selection in Autocomplete
  const handleServiceChange = (event, value) => {
    setUser({ ...user, Service: value ? value.label : "" });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
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
                value={user.Name}
                onChange={data}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone"
                variant="outlined"
                value={user.Phone}
                // inputProps={{ inputMode: "numeric" }}
                onChange={data}
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
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={user.Email}
                onChange={data}
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
                value={{ label: user.Service }}
                onChange={handleServiceChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Service"
                    name="Service"
                    variant="outlined"
                    required
                    value={user.Service}
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
                onChange={data}
                value={user.Date}
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
                value={user.Time}
                variant="outlined"
                select
                onChange={data}
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
                value={user.Notes}
                onChange={data}
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
              onClick={getdata}
            >
              Book
            </Button>
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
          </Grid>
        </CardContent>
      </form>
    </Box>
  );
};

export default BookingPage;
