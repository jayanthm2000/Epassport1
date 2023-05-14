import React, { useState, useContext } from "react";

import InputAdornment from "@mui/material/InputAdornment";

import VisibilityIcon from "@mui/icons-material/Visibility";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";

import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";

import { useNavigate, Link, redirect } from "react-router-dom";

import Home from "./Home";

import { LoginContext } from "../Contexts/LoginContext";

const theme = createTheme();

export default function SignIn() {
  const history = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  // const [regisetereduser,setRegistereduser] = useState(null)

  //const [user, setUser] = useState({ });

  const [isauthenticated, setIsauthenticated] = useState(false);

  const [error, setError] = useState("");

  const [passwordEye, setPasswordEye] = useState(false);

  // const { registereduser, setRegistereduser, role, setRole } =

  //   useContext(LoginContext);

  // handle password eye

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    const { email, password } = user;

    try {
      const url = "http://localhost:4002/api/v1/login";

      const userresp = await axios.post(url, user);

      console.log(userresp.data.user);

      localStorage.setItem("id", userresp.data.user._id);

      localStorage.setItem("role", userresp.data.user.role);

      localStorage.setItem("form", userresp.data.user.form_id);

      history("/");

      window.location.reload(true);

      // setRegistereduser(userresp.data.user);

      // setRole(userresp.data.user.role);

      // if(user){

      //   localStorage.setItem("token", res.user)

      //   .then(window.location("/"));

      //   //window.location("/")

      // }

      // else{

      //   alert("User not found")

      // }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("User not found");

        setError(error.response.data.message);
      }
    }

    // console.log(role);

    // console.log(registereduser);
  };

  // if (registereduser) {

  //   if (role === "admin") {

  //     history("/adminRoute");

  //   } else if (role === "user") {

  //     history("/userRoute");

  //   }

  // }

  // console.log(registereduser);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          marginBottom: "15vh",
        }}
      >
        <CssBaseline />

        <Box
          sx={{
            marginTop: 26,

            display: "flex",

            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box action="POST" component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              value={user.email}
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {passwordEye === false ? (
                      <VisibilityOffIcon
                        cursor="pointer"
                        onClick={handlePassword}
                      />
                    ) : (
                      <VisibilityIcon
                        cursor="pointer"
                        onClick={handlePassword}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              name="password"
              label="Password"
              value={user.password}
              type={passwordEye === false ? "password" : "text"}
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              onClick={submit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs></Grid>

              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
