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
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Image2 from "../../../src/Assets/debitCard.jpg";
import Image3 from "../../../src/Assets/debitCardBack.jpg";
import CardLogo from "../../../src/Assets/cardLogos.png";
import { CheckBox } from "@mui/icons-material";
import axios from "axios";

const PaymentDetails = ({ bookingData, onFormValid }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cardNumberError, setCardNumberError] = useState('');
  const [cvcError, setCvcError] = useState('');

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
      const formattedValue = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1-")
        .slice(0, 19);
      trimmedValue = formattedValue;

      // Validate card number
      if (formattedValue.replace(/-/g, "").length !== 16) {
        setCardNumberError('Card number must be 16 digits');
      } else {
        setCardNumberError('');
      }
    } else {
      trimmedValue =
        typeof value === "string" ? value.trim() : value.toString();
    }
    
    if (name === "cvc") {
      // Validate CVC
      if (!/^\d{3}$/.test(trimmedValue)) {
        setCvcError('CVC must be a 3-digit number');
      } else {
        setCvcError('');
      }
    }


    setFormData((prevData) => ({
      ...prevData,
      [name]: trimmedValue,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
              <img
                className="img"
                width="35%"
                height="50%"
                src={Image2}
                alt="imN"
                loading="lazy"
              />
              <img
                className="img"
                width="35%"
                height="50%"
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
              error={!!cardNumberError}
              helperText={cardNumberError}
            />

            <Stack direction={"row"} spacing={2}>
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
                error={!!cvcError}
                helperText={cvcError}
              />
            </Stack>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                className="img"
                width="30%"
                height={45}
                src={CardLogo}
                alt="ImN"
              />
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              borderRadius: 10,
              bgcolor: "#FDCEDF",
              marginRight: -10,
              marginLeft: 15,
              marginTop: -2,
            }}
          >
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "28px",
                    color: "#AF0171",
                    fontFamily: "Georgia, serif",
                    
                  }}
                >
                  Booking Details
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Name"
                  disabled
                  fullWidth
                  name="name"
                  value={formData.name}
                  
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Phone"
                  disabled
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Email"
                  disabled
                  fullWidth
                  name="email"
                  value={formData.email}
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Service"
                  disabled
                  fullWidth
                  name="service"
                  value={formData.service}
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Time"
                  disabled
                  fullWidth
                  name="time"
                  value={formData.time}
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <TextField
                  label="Notes"
                  disabled
                  fullWidth
                  name="notes"
                  value={formData.notes}
                  sx={{
                    bgcolor: "#FEE3EC",
                    "& .Mui-disabled": {
                      color: "black",
                      fontWeight: "520",
                      fontSize: "1rem",
                      fontFamily: "Georgia, serif",
                      WebkitTextFillColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      paddingTop: "4px",
                    },
                  }}
                />
              </Box>
              <FormGroup>
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox sx={{ fontWeight: "600", fontFamily: "Georgia, serif", }} defaultChecked />
                  }
                  label="Receipt will be sent to your provided email address."
                />
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentDetails;
