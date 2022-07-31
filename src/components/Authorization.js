import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authPng from "../assets/auth.png"

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginAndRegisterForm = (props) => {
  return (
    <Grid container justifyContent="center" sx={{ height:"87vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "87vh", 
    backgroundImage: "url(https://images.unsplash.com/photo-1650355984861-adc971b4343f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={12} square sx={{width:"60vf", height:"60vh", mt:8, borderRadius:5}}>
        <Box
          sx={{
            my: 2,
            mx: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid sx={{ m: 1}}>
            <img src={authPng} sx={{ mr: 2 }} style={{backgroundColor: "inherit", height: "125px"}}/>
          </Grid>
          <Typography component="h1" variant="h5">
            {props.method}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
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
              size="small"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {props.method}
            </Button>
            {/* <Grid container alignItems="center" >
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const Authorization = () => {
  const navigate = useNavigate();
  const { signup, login, currentUser } = useAuth();
  // const method = useState(props.method);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
    console.log(currentUser);
  }, [currentUser, navigate]);

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {}}
        component={LoginAndRegisterForm}
      ></Formik>
    </div>
  );
};

export default Authorization;
