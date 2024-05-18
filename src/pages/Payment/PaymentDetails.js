import {
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image2 from "../../../src/Assets/debitCard.jpg";
import Image3 from "../../../src/Assets/debitCardBack.jpg";
import CardLogo from "../../../src/Assets/cardLogos.png";

const PaymentDetails = ({ bookingData }) => {
  console.log("booking data => ", bookingData);

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} mt={1}>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Stack direction={"row"} justifyContent={"center"} spacing={3}>
              <img
                className="img"
                width="40%"
                height="auto"
                src={Image2}
                alt="imN"
                loading="lazy"
              />
              <img
                className="img"
                width="40%"
                height="auto"
                src={Image3}
                alt="ImN"
                loading="lazy"
              />
            </Stack>
            <TextField
              id="Name_on_Card"
              name="Name on Card"
              label="Name on Card"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
            <TextField
              id="Card_Number"
              required
              name="Card Number"
              label="Card Number"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            />
            <Stack direction={"row"} spacing={3}>
              <TextField
                id="Month"
                required
                name="Month"
                label="Month"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
              <TextField
                id="Year"
                required
                name="Year"
                label="Year"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
              <TextField
                id="CVC"
                required
                name="CVC"
                label="CVC"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Stack>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img className="img" width="20%" src={CardLogo} alt="ImN" />
            </div>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined" color="primary" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography>Name: {bookingData?.Name}</Typography>
              <Typography>Phone: {bookingData?.Phone}</Typography>
              <Typography>Email: {bookingData?.Email}</Typography>
              <Typography>Service: {bookingData?.Service}</Typography>
              <Typography>Time: {bookingData?.Time}</Typography>
              <Typography>Notes: {bookingData?.Notes}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentDetails;
