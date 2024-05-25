import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentDetails from "../Payment/PaymentDetails";
import ReviewBooking from "../ReviewBooking/ReviewBooking";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { selectBookingData } from "../redux/BookingDataSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const steps = ["Payment Details", "Finalize the booking"];

const CheckOut = () => {
  const navigate = useNavigate();
  const bookingData = useSelector(selectBookingData);
  const [activeStep, setActiveStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      saveData();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const saveData = async () => {
    setLoading(true);
    setMessage("Payment has been initiated with booking details...");

    const { Name, Phone, Email, Service, Date, Time, Notes } = bookingData;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Phone, Email, Service, Date, Time, Notes }),
    };

    let res;
    try {
      res = await fetch(
        "https://he-and-she-356f5-default-rtdb.firebaseio.com/UserData.json",
        options
      );

      if (res.ok) {
         toast.success("Booking confirmed");
        setMessage("Payment has been initiated with booking details...! Redirecting to the Dashboard...Now");
      } else {
        // toast.error("Something went wrong");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      // toast.error("Network error. Please try again later.");
      setMessage("Network error. Please try again later.");
    }

    // Ensure the loader shows for at least 10 seconds
    await new Promise((resolve) => setTimeout(resolve, 10000));
    setLoading(false);

    if (res && res.ok) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  const handleFormValid = (isValid) => {
    setIsFormValid(isValid);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PaymentDetails bookingData={bookingData} onFormValid={handleFormValid} />;
      case 1:
        return <ReviewBooking />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {loading ? (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                <CircularProgress />
                <Typography sx={{ mt: 2 }}>{message}</Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  onClick={saveData}
                  variant="contained"
                  color="success"
                  disabled={!isFormValid && activeStep === 0}
                >
                  {activeStep === steps.length - 1 ? "Place The Booking" : "Pay"}
                </Button>
              </Box>
            )}
            {getStepContent(activeStep)}
          </React.Fragment>
        )}

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
      </Box>
    </Box>
  );
};

export default CheckOut;
