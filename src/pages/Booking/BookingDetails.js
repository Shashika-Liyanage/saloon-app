import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";

const BookingDetails = (BookingPage) => {
  return (
    <div>
      <Grid container spacing={3} justifyContent={"center"} sx={{ mt: "5px" }}>
        <Grid item xs={6}>
          <TextField
            id="name"
            name="Name"
            label="Name"
            variant="outlined"
            fullWidth
            // value={user.Name}
            // onChange={data}
            sx={{ bgcolor: "white" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="phone_number"
            label="Phone Number"
            name="Phone"
            variant="outlined"
            // value={user.Phone}
            // inputProps={{ inputMode: "numeric" }}
            // onChange={data}
            sx={{ bgcolor: "white" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent={"center"} sx={{ mt: "5px" }}>
        <Grid item xs={6}>
          <TextField
            id="email"
            name="Email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            // value={user.Email}
            // onChange={data}
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
      <Grid container spacing={3} justifyContent={"center"} sx={{ mt: "5px" }}>
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
            // value={{ label: user.Service }}
            // onChange={handleServiceChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Service"
                name="Service"
                variant="outlined"
                // value={user.Service}
                sx={{ bgcolor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date"
            sx={{ bgcolor: "white" }}
            disabled
            value={"Date"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent={"center"} sx={{ mt: "5px" }}>
        <Grid item xs={6}>
          <TextField
            id="time"
            label="Time"
            name="Time"
            // value={user.Time}
            variant="outlined"
            select
            // onChange={data}
            fullWidth
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
        <Grid item xs={6}>
          <TextField
            id="notes"
            label="Notes"
            variant="outlined"
            name="Notes"
            // value={user.Notes}
            // onChange={data}
            fullWidth
            sx={{ bgcolor: "white" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingDetails;
