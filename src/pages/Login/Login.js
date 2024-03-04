import React, { useState } from 'react';
import { Container, Button, Typography, TextField, Grid, Paper } from '@mui/material';

const Login = () => {
  // State variables to store username and password
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle login (e.g., sending credentials to a server for authentication)
    console.log('Credentials:', credentials);
    // For simplicity, let's just clear the form fields after submission
    setCredentials({ username: '', password: '' });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success" type="submit" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  </div>
  );
};

export default Login;
