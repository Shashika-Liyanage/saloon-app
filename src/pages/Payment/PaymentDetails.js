import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Image2 from "../../../src/Assets/debitCard.jpg";
import Image3 from "../../../src/Assets/debitCardBack.jpg";
import CardLogo from "../../../src/Assets/cardLogos.png";
import ReviewBooking from "../ReviewBooking/ReviewBooking";

const PaymentDetails = ({ bookingData }) => {
  console.log("booking data => ", bookingData);

  const [test1, istest1] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        mt: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6} sx={{ ml: 4 }}>
            <img
              className="img"
              width="50%"
              height="auto"
              src={Image2}
              alt="image"
            />
            <img
              className="img"
              width="50%"
              height="auto"
              src={Image3}
              alt="image"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent={"left"}
          sx={{ mt: "5px", ml: "10px" }}
        >
          <Grid item xs={6}>
            <TextField
              id="Name_on_Card"
              name="Name on Card"
              label="Name on Card"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent={"left"}
          sx={{ mt: "5px", ml: "10px" }}
        >
          <Grid item xs={6}>
            <TextField
              id="Card_Number"
              required
              name="Card Number"
              label="Card Number"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent={"left"}
          sx={{ mt: "5px", ml: "10px" }}
        >
          <Grid item xs={2}>
            <TextField
              id="Month"
              required
              name="Month"
              label="Month"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="Year"
              required
              name="Year"
              label="Year"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="CVC"
              required
              name="CVC"
              label="CVC"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
            <img
              className="img"
              width="83%"
              alignItems="right"
              src={CardLogo}
              alt="image"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PaymentDetails;
