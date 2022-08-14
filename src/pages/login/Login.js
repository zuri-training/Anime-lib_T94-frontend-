import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/LOGO.svg";
import {
  Button,
  Container,
  Grid,
  TextField,
  Box,
  Typography,
  CssBaseline,
  Divider,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
// import theme from './theme.js';
// import myButtons from '../../components/styled/buttons.styles';
import { RoundedButton } from "./styled/buttons.styles";
import { $api } from "../../shared/api";
import { useAuth } from "../../hooks/useAuth";
// import { googleButton } from '../../components/styled/buttons.styles';

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
    };
    $api
      .$post("/auth/login", payload)
      .then(({ data: authorizedUser }) => {
        $api.setToken(authorizedUser.token);
        login(authorizedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const clearError = () => {
    setError("");
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 0, minHeight: "69vh" }}>
      <CssBaseline />
      <div>
        <Grid
          item
          className="signup-header"
          color="primary"
          sx={{ mt: 5, mb: 0, pl: 5 }}
        >
          <Typography variant="h4" color={"#43B97F"}>
            {" "}
            Welcome back,{" "}
          </Typography>
          <Typography variant="body1" color={"#fff"}>
            {" "}
            Don't have an account yet?
            <Link
              to="/"
              color="#ffcc4a"
              style={{ textDecoration: "none", paddingLeft: 5 }}
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </div>
      <Box
        sx={{
          width: 512,
          borderRadius: "15px",
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, borderRadius: "15px" }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sx={{ mb: 2, borderRadius: "15px" }}>
              <Box component="span" sx={{ fontSize: 10 }}>
                Email
              </Box>
              <Box sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
                <TextField
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#000",
                    },
                  }}
                  name="email"
                  autoComplete="off"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2, borderRadius: "15px" }}>
              <Box component="span" sx={{ fontSize: 10 }}>
                Password
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  color: "#000",
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="password"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#000",
                    },
                  }}
                  type="password"
                  id="password"
                  autoComplete="off"
                  size="small"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid sx={{ pl: 0 }}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="rememberme"
                    color="primary"
                    sx={{ color: "#fff" }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "12px", ml: -1 }}>
                    Remember me
                  </Typography>
                }
              />
              <Link
                to="/forgot-password"
                color="#fff"
                style={{ textDecoration: "none", paddingLeft: 1 }}
              >
                Forgot Password
              </Link>
            </Grid>

            <RoundedButton
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 2, textTransform: "capitalize", width: "100%" }}
              xs={8}
            >
              Login
            </RoundedButton>

            <Divider
              sx={{
                width: "100%",
                "&::before, &::after": {
                  borderColor: "#fff",
                  borderBottomWidth: 42,
                },
              }}
            >
              Or
            </Divider>
            <Button
              variant="outlined"
              fullWidth
              sx={{ width: "100%", mt: 5, mb: 2, textTransform: "capitalize" }}
            >
              Continue with Google
            </Button>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!error}
        autoHideDuration={6000}
        onClose={clearError}
      >
        <Alert onClose={clearError} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
