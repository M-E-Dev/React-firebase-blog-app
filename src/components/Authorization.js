import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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
  

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const LoginAndRegisterForm = (props) => {
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

    return(
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
    )
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
    }, [currentUser, navigate])

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {

                }}
                component={LoginAndRegisterForm}
            >
            </Formik>
        </div>
    )
}

export default Authorization;