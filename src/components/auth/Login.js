import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LoadingOverlayComp from "../LoadingOverlayComp";
import MuiAlert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { GoogleLogin } from "react-google-login";
import jwt_decode from "jwt-decode";
import { Box } from "@mui/system";
import logo from "../../assets/images/logo.svg";

export default function Login(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.state.auth.isAuthenticated) {
      navigate("/");
      props.setErrors({});
    }
  }, [navigate, props]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser(formData, navigate);
  };

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(result);
    const decoded = jwt_decode(token);
    console.log(decoded);
    const userData = {
      name: result.name,
      email: result.email,
      exp: decoded.exp,
      iat: decoded.iat,
    };
    props.googleLogin({ userData, token: "Bearer " + token });
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  return (
    <LoadingOverlayComp active={false}>
      <Container id="mainComp" component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            marginLeft: { lg: "55px", md: "55px", sm: "65px", xs: "110px" },
            paddingBottom: "50px",
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <span className="logoText">Intiquery</span>
        </Box>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.text} variant="h5">
            Sign In
          </Typography>
          {Object.keys(props.state.authErrors).length > 0 && (
            <Alert severity="error">
              {Object.values(props.state.authErrors).map((obj) => {
                return (
                  <li>
                    {obj}
                    <br />
                  </li>
                );
              })}
            </Alert>
          )}

          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <GoogleLogin
              clientId="202666916683-mmmigflct636va26l81p7ah425i284ed.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
            <Grid container justify="center">
              <Grid item>
                <Button
                  className={classes.text}
                  onClick={() => navigate("/register")}
                >
                  Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </LoadingOverlayComp>
  );
}
