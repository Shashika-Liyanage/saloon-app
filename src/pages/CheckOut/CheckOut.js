import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentDetails from "../Payment/PaymentDetails";
import ReviewBooking from "../ReviewBooking/ReviewBooking";
import { useSelector } from "react-redux";
import { selectBookingData } from "../redux/BookingDataSlice";
//import { useNavigate } from "react-router-dom";

const steps = ["Payment Details", "Review the Booking"];

const CheckOut = () => {
  // const navigate = useNavigate();
  const bookingData = useSelector(selectBookingData);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PaymentDetails bookingData={bookingData} />;
      case 1:
        return <ReviewBooking />;
      default:
        return "Unknown step";
    }
  };

  // useEffect(() => {
  //   if(!bookingData) navigate('/Booking')
  // },[bookingData])

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
              <Button onClick={handleNext} variant="contained" color="primary">
                {activeStep === steps.length - 1 ? "Place The Booking" : "Next"}
              </Button>
            </Box>
            {getStepContent(activeStep)}
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
};

export default CheckOut;
