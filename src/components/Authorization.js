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
import authPng from "../assets/auth.png";
import { Login } from "../pages/LoginRegister";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginAndRegisterForm = (props) => {
  const {loginWithGoogle} = useAuth();
  const handleGoogleProvider = () => {
    loginWithGoogle();
  }
  const { handleChange, handleBlur, errors, isSubmitting, values, touched, method} =
    props;

  console.log(props);

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        height: "87vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "87vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1650355984861-adc971b4343f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={12}
        square
        sx={{ width: "60vf", height: "60vh", mt: 8, borderRadius: 5 }}
      >
        <Box
          sx={{
            my: 2,
            mx: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div sx={{ m: 1 }}>
            <img
              src={authPng}
              sx={{ mr: 2 }}
              style={{ backgroundColor: "inherit", height: "125px" }}
            />
          </div>
          <Typography component="h1" variant="h5">
            ~~~{method}~~~
          </Typography>
          <Form noValidate sx={{ mt: 1 }}>
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              size="small"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {isSubmitting ? (
              <div className="loadingContainer" style={{ height: "15vh" }}>
                <img
                  style={{
                    marginTop: "40px",
                    height: "15vh",
                    borderRadius: "15px",
                  }}
                  src="https://media0.giphy.com/media/J2zYeWkFypRR1d6s4d/giphy.gif?cid=790b761102a2bdf8b6221bf69ff337ca6d56472b0171ab20&rid=giphy.gif&ct=g"
                  alt="loading"
                  className="loadingGif"
                />
              </div>
            ) : (
              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {method}
                </Button>
                <Button fullWidth variant="contained" sx={{ m: "0", p: "0" }} onClick={handleGoogleProvider} >
                  with
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
                    alt=""
                    style={{ height: "3vh", margin: "5px", padding: "5px" }}
                  />
                </Button>
              </div>
            )}
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
          </Form>
        </Box>
      </Grid>
    </Grid>
  );
};

const Authorization = (props) => {
  const navigate = useNavigate();
  const { signup, login, currentUser } = useAuth();
  const [method] = useState(props.method);

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
         email: "",
         password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          if (method === "Login") {
            login(values.email, values.password).then(()=> {
              alert(`${method} successfull!`);
              navigate("/");
              actions.setSubmitting(false)
            }).catch((err) => {
              alert(err.message);
              actions.setSubmitting(false);
              actions.resetForm();
            })
          } else {
            signup(values.email, values.password).then(()=> {
              alert(`${method} successfull!`);
              navigate("/");
              actions.setSubmitting(false)
            }).catch((err) => {
              alert(err.message);
              actions.setSubmitting(false);
              actions.resetForm();
            })
          }
        }}
        component={(props) => <LoginAndRegisterForm method={method} {...props}/>}
      ></Formik>
    </div>
  );
};

export default Authorization;
