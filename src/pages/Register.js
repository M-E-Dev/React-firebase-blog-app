import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { createUser, forgotPassword } from "../helpers/userFunction";
import {useNavigate } from "react-router-dom";
import {  signUpProvider } from "../helpers/userFunction";
import passwordImg from "../assets/forgot-password.png";
import googleLogo from "../assets/google.png";


const Login = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    const displayName = `${userName}`;
    e.preventDefault();
    createUser(email,password,navigate,displayName);
    console.log(userName, email, password);
  }

  const handleProviderLogin = () => {
    signUpProvider(navigate);
    
  }


  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
      <Grid
      textAlign="center"
      style={{ width: "300" }}
    >
      
      <h2 className="contact-header">----Register----</h2>
    
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
      
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              label="username"
              placeholder="User Name"
              required
              onChange={(e)=>setUserName(e.target.value)}
              
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               autoComplete="email"
               autoFocus
              variant="outlined"
              name="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              
            />
            
            <Button variant="contained" type="submit" value="Submit"
            >
              register
            </Button>
            <Button
                onClick={handleProviderLogin}
                variant="outlined"
                type="submit"
                value="Submit"
                style={{
                  height: "2.5rem",
                  
                }}
              >
                WITH{" "}
                <img
                  style={{
                    height: "1rem",
                    color: "black",
                    padding: "1rem",
                    fontWeight: "bold",
                  }}
                  src={googleLogo}
                  alt="google-logo"
                />
              </Button>
            
          </Stack>

          </form>
          <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>
            <p>
            Are you already registered?{" "}
              <Button onClick={() => navigate("/login")}>Login</Button>
            </p>
            <p>
              Do you forgot the password?{" "}
              <Button onClick={() => forgotPassword(email)}>
                <img src={passwordImg} alt="" />
              </Button>
            </p>
          </div>
      </Box>
    </Grid>
    </div>
  );
};

export default Login;


