import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const SentMail = () => {
  const [user, setUser] = useState({
    fromEmail: "",
    ccEmail: "",
    toEmail: "",
    subject: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      sendEmail();
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const isFormValid = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("https://api.sendemail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        toast.success("Email sent successfully");
        navigate("/dashboard");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <CardContent
          sx={{
            backgroundColor: "#EED3D9",
            borderRadius: 10,
            padding: 4,
            minWidth: 300,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#99154E",
              fontFamily: "Georgia",
              mb: 2,
            }}
          >
            Send Email
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="fromEmail"
                name="fromEmail"
                label="From Email Address"
                variant="outlined"
                fullWidth
                required
                value={user.fromEmail}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="ccEmail"
                name="ccEmail"
                label="CC Email Address"
                variant="outlined"
                fullWidth
                value={user.ccEmail}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="toEmail"
                required
                name="toEmail"
                label="To Email Address"
                variant="outlined"
                fullWidth
                value={user.toEmail}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subject"
                name="subject"
                required
                label="Subject"
                variant="outlined"
                fullWidth
                value={user.subject}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="body"
                name="body"
                label="Message "
                required
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={user.body}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            disabled={!isFormValid()}
            sx={{ mt: 2 }}
          >
            Send
            <SendIcon/>
          </Button>
        </CardContent>
      </form>
      <Toaster position="top-right" />
    </Box>
  );
};

export default SentMail;
