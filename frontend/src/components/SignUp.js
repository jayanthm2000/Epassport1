import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";

import InputAdornment from "@mui/material/InputAdornment";

import VisibilityIcon from "@mui/icons-material/Visibility";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

import { useNavigate, Link } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  // const navigate = useNavigate()

  const history = useNavigate();

  // const [fname,setFname] = useState()

  // const [lname,setLname] = useState()

  // const [dob,setDob] = useState()

  // const [email,setEmail] = useState()

  // const [pass,setPass] = useState()

  const [passwordEye, setPasswordEye] = useState(false);

  // handle password eye

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  const [user, setUser] = useState({
    first_name: "",

    last_name: "",

    DOB: "",

    gender: "",

    email: "",

    password: "",

    form_id: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    const { first_name, last_name, DOB, gender, email, password } = user;

    try {
      const url = "http://localhost:4002/api/v1/register";

      const { data: res } = await axios.post(url, {
        first_name,
        last_name,
        DOB,
        gender,
        email,
        password,
      });

      history("/login");

      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }

    // const {fname,lname,dob,email,pass} = user

    //     await axios.post("http://localhost:4002/api/v1/register",user

    //     ).then((res)=>{

    //         if(res.data){

    //             alert(res.data.message)

    //             history("/login",{state:{id:email}})

    //         }

    //     }).catch(e=>{

    //         console.log(e)

    //     })
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 20,

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              mb: 20,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Box action="POST" component="form" noValidate sx={{ mt: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleChange}
                    value={user.fname}
                    required
                    name="first_name"
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleChange}
                    value={user.lname}
                    id="lastName"
                    label="Last Name"
                    name="last_name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <form>
                    <input
                      value={user.DOB}
                      name="DOB"
                      onChange={handleChange}
                      type="date"
                    />
                  </form>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleChange}
                    value={user.gender}
                    id="gender"
                    label="Gender"
                    name="gender"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    onChange={handleChange}
                    value={user.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
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
                    required
                    fullWidth
                    onChange={handleChange}
                    value={user.pass}
                    name="password"
                    label="Password"
                    type={passwordEye === false ? "password" : "text"}
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>

              <Button
                onClick={submit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid cursor="pointer" container justifyContent="flex-end">
                <Grid>
                  <Link cursor="pointer" to={"/login"}>
                    Already user? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
