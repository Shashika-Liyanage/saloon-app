import React, { useState } from 'react';
import  {Container,  Button, Typography, TextField}  from '@mui/material';

const Login = () => {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle login (e.g., sending credentials to a server for authentication)
    console.log('Username:', username);
    console.log('Password:', password);
    // For simplicity, let's just clear the form fields after submission
    setUsername('');
    setPassword('');
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login Page</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
