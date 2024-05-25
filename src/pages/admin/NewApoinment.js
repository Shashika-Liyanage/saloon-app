import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const NewApoinment = () => {
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

  console.log(user, "janith");
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const getdata = async (e) => {
  //   const { Name, Phone, Email, Service, Date, Time, Notes } = user;
  //   e.preventDefault();
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ Name, Phone, Email, Service, Date, Time, Notes }),
  //   };

  //   const res = await fetch(
  //     "https://he-and-she-356f5-default-rtdb.firebaseio.com/UserData.json",
  //     options
  //   );
  //   console.log(res);

  //   if (res.ok) {
  //     toast.success("Booking confirmed");
  //     setTimeout(() => {
  //       toast.success("You're being redirected to the Dashboard!!!!!! ");
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 3000);
  //     }, 1000);
  //   } else {
  //     toast.error("Something went wrong");
  //   }
  // };
  // console.log("User State:", user);
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

  // Function to check if all form fields are filled
  const isFormFilled = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };

  // Event handler for service selection in Autocomplete
  const handleServiceChange = (event, value) => {
    setUser({ ...user, Service: value ? value.label : "" });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (isFormFilled()) {
      // Your submission logic here
    } else {
      toast.error("Please fill in all fields");
    }
  };

  // const handleChange = (event) => {
  //   if (event.target.value.match(/[^0-9]/)) {
  //     event.preventDefault();
  //   }
  //   // otherwise, continue with the rest of your logic
  //   // ...
  // };
  //
  const goToCheckOutPage = () => {
    navigate("/Checkout");
  };
  
  return (
   
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center the form horizontally
        alignItems: "center", // Center the form vertically
        minHeight: "100vh", // Make the container full height of the viewport
      }}
    >
      <form onSubmit={handleSubmit}>
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
              fontSize: 40,
              mt: "10px",
              color: "#99154E",
              fontFamily: "Georgia",
              
            }}
          >
            New Appoinments
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ mt: "5px" }}
          >
            <Grid item xs={5}>
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
            <Grid item xs={5}>
              <TextField
                id="phone_number"
                label="Phone Number"
                name="Phone"
                variant="outlined"
                value={user.Phone}
                fullWidth
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
            <Grid item xs={5}>
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
            <Grid item xs={5}>
              <TextField
                label="Branch"
                sx={{ bgcolor: "white" }}
                disabled
                value={"Negambo"}
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
            <Grid item xs={5}>
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
                fullWidth
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
            <Grid item xs={5}>
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
            <Grid item xs={5}>
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
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true, // Keep native select enabled
                  // Add padding to the native select
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
            <Grid item xs={5}>
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
           
           
           
          </Grid>{" "}
          <br></br>
          <Grid item>
            <Button
              type="submit"
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
              // onClick={getdata}
              onClick={goToCheckOutPage}
            >
              Place The Appoinment
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

export default NewApoinment;
