import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0091ea',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        component="main"
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1650355984861-adc971b4343f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "87vh",
        }}
      >
        <CssBaseline />
        <Grid item>
          <Box
            sx={{
              mt:10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:"60vh",
              backgroundColor: theme.palette.secondary.main
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab label="SIGN IN" value="1" sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize', px:7}} />
                  <Tab label="REGISTER" value="2" sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize', px:7}} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width:"40vh" }}
                  >
                    Sign In
                  </Button>
                  <Grid container sx={{alignItems: "center", display: "flex"}}>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width:"40vh" }}
                  >
                    Register
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// export default function LabTabs() {

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }} >

//     </Box>
//   );
// }

// import React, { useState } from "react";
// import { Grid, TextField, Button, Stack, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import {
//   forgotPassword,
//   signIn,
//   signUpProvider,
// } from "../helpers/userFunction";
// import { ToastifyInfo } from "../helpers/toastNotify";
// import passwordImg from "../assets/forgot-password.png";
// import googleLogo from "../assets/google.png";

// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signIn(email, password, navigate);
//     ToastifyInfo("login successfully");

//     console.log(email, password);
//   };

//   const handleProviderLogin = () => {
//     signUpProvider(navigate);
//     ToastifyInfo("login successfully");
//   };

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
//     >
//       <Grid textAlign="center" style={{ width: "300px" }}>
//         <h2 className="contact-header">----Login----</h2>

//         <Box style={{ backgroundColor: "white", padding: "20px" }}>
//           <form onSubmit={handleSubmit}>
//             <Stack spacing={3} direction="column">
//               <TextField
//                 variant="outlined"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <TextField
//                 variant="outlined"
//                 type="password"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <Button variant="contained" type="submit" value="Submit">
//                 Login
//               </Button>
//               <Button
//                 onClick={handleProviderLogin}
//                 variant="outlined"
//                 type="submit"
//                 value="Submit"
//                 style={{
//                   height: "2.5rem",

//                 }}
//               >
//                 WITH{" "}
//                 <img
//                   style={{
//                     height: "1rem",
//                     color: "black",
//                     padding: "1rem",
//                     fontWeight: "bold",
//                   }}
//                   src={googleLogo}
//                   alt="google-logo"
//                 />
//               </Button>
//             </Stack>
//           </form>
//           <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>
//             <p>
//               Are you not registered?{" "}
//               <Button onClick={() => navigate("/register")}>Register</Button>
//             </p>
//             <p>
//               Do you forgot the password?{" "}
//               <Button onClick={() => forgotPassword(email)}>
//                 <img src={passwordImg} alt="" />
//               </Button>
//             </p>
//           </div>
//         </Box>
//       </Grid>
//     </div>
//   );
// };

// export default Login;
