import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: Ensure all fields are filled
    if (!cardNumber || !expiry || !cvv) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Validation: Ensure card number is a valid format
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      setErrorMessage("Please enter a valid card number.");
      return;
    }

    // Validation: Ensure expiry date is in MM/YY format
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryRegex.test(expiry)) {
      setErrorMessage("Please enter a valid expiry date in MM/YY format.");
      return;
    }

    // Validation: Ensure CVV is a 3-digit number
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      setErrorMessage("Please enter a valid CVV.");
      return;
    }

    // If validation passes, proceed with payment processing
    console.log("Card Number:", cardNumber);
    console.log("Expiry:", expiry);
    console.log("CVV:", cvv);
    // Reset error message after successful submission
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
   
      <TextField
        type="text"
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      
      <TextField
        label="Expiry"
        type="text"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="MM/YY"
        required
      />
      <TextField
        label="CVV"
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />
      <Button variant="contained" color="success" type="submit">
        Pay
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default PaymentDetails;
