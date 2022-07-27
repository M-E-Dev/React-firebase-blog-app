import React, { useState } from "react";
import { Grid, TextField, Button, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  forgotPassword,
  signIn,
  signUpProvider,
} from "../helpers/userFunction";
import { ToastifyInfo } from "../helpers/toastNotify";
import passwordImg from "../assets/forgot-password.png";
import googleLogo from "../assets/google.png";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    ToastifyInfo("login successfully");

    console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
    ToastifyInfo("login successfully");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
    >
      <Grid textAlign="center" style={{ width: "300px" }}>
        <h2 className="contact-header">----Login----</h2>

        <Box style={{ backgroundColor: "white", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
              <TextField
                variant="outlined"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                type="password"
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="contained" type="submit" value="Submit">
                Login
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
              Are you not registered?{" "}
              <Button onClick={() => navigate("/register")}>Register</Button>
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
