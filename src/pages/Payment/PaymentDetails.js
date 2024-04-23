import { Grid, TextField } from "@mui/material";
import React from "react";
import Image2 from "../../../src/Assets/debitCard.jpg";
import Image3 from "../../../src/Assets/debitCardBack.jpg";
import CardLogo from "../../../src/Assets/cardLogos.png";
import OrderSummary from "../Order Summary/OrderSummary";
const PaymentDetails = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ ml: "50px", mt: "25px" }}>
        <img
          className="img"
          width="23%"
          height="auto"
          alignItems="left"
          src={Image2}
          alt="image"
        />
        <img
          className="img"
          width="23%"
          height="auto"
          alignItems="left"
          src={Image3}
          alt="image"
        />
       
        <OrderSummary/>
  
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
    </>
  );
};

export default PaymentDetails;
