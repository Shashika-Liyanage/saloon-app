import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import Image2 from "../../../src/Assets/debitCard.jpg";
import Image3 from "../../../src/Assets/debitCardBack.jpg";
import CardLogo from "../../../src/Assets/cardLogos.png";

const PaymentDetails = ({ bookingData, onFormValid }) => {
  const [formData, setFormData] = useState({
    name: bookingData?.Name || "",
    phone: bookingData?.Phone || "",
    email: bookingData?.Email || "",
    service: bookingData?.Service || "",
    time: bookingData?.Time || "",
    notes: bookingData?.Notes || "",
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

const handleInputChange = (e) => {
  const { name, value } = e.target;
  let trimmedValue = value;

  if (name === "cardNumber") {
    // For the "Card Number" field, update the value with dashes
    const formattedValue = value
      .replace(/\D/g, "") // Remove non-numeric characters
      .slice(0, 16) // Limit to 16 characters
      .replace(/(.{4})/g, "$1-") // Add dash after every 4 characters
      .slice(0, 19); // Limit to 19 characters including dashes
    trimmedValue = formattedValue;
  } else {
    // For other fields, apply the trim() method if the value is a string
    trimmedValue = typeof value === "string" ? value.trim() : value.toString();
  }

  setFormData((prevData) => ({
    ...prevData,
    [name]: trimmedValue,
  }));
};

  
  
  
  
  
  
  useEffect(() => {
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    onFormValid(isFormValid);
  }, [formData, onFormValid]);

  return (
    <div
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
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
              name="cardName"
              required
              label="Name on Card"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
              value={formData.cardName}
              onChange={handleInputChange}
            />
            <TextField
              id="Card_Number"
              required
              name="cardNumber"
              label="Card Number"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
              value={formData.cardNumber}
              onChange={handleInputChange}
            />

            <Stack direction={"row"} spacing={3}>
              <TextField
                select
                id="Month"
                required
                name="month"
                label="Month"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
                value={formData.month}
                onChange={handleInputChange}
              >
                {Array.from({ length: 12 }, (_, index) => {
                  const month = index + 1;
                  return (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                select
                id="Year"
                required
                name="year"
                label="Year"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
                value={formData.year}
                onChange={handleInputChange}
              >
                {Array.from({ length: 10 }, (_, index) => {
                  const year = new Date().getFullYear() + index;
                  return (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                id="CVC"
                required
                name="cvc"
                label="CVC"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
                value={formData.cvc}
                onChange={handleInputChange}
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
          <Card variant="outlined" sx={{ borderRadius: 2, bgcolor: "#AD88C6" }}>
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
                  Booking Details
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Name"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Phone"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Email"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Service"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="service"
                  value={formData.service}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Time"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="time"
                  value={formData.time}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Notes"
                  disabled
                  variant="outlined"
                  fullWidth
                  name="notes"
                  value={formData.notes}
                  sx={{
                    bgcolor: "white",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "12px",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentDetails;
