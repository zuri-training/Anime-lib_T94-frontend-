import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Link,
  Container,
  Grid,
  TextField,
  Box,
  Typography,
  CssBaseline,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";

import { RoundedButton } from "../login/styled/buttons.styles";
import { $api } from "../../shared/api";
import { useAuth } from "../../hooks/useAuth";

export default function Signup() {
  const { login } = useAuth();
  const [values, setValues] = useState({});
  const [error, setError] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    $api
      .$post("/auth/register", values)
      .then(({ data: authorizedUser }) => {
        $api.setToken(authorizedUser.token);
        login(authorizedUser);
      })
      .catch((error) => {
        if (error.status === 422) {
          setErrors(error.errors);
          return;
        }

        setError(error.message);
      });
  };

  const clearError = () => {
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 0, pb: 0.5 }}>
      <CssBaseline />
      <div>
        <Grid
          item
          className="signup-header"
          color="primary"
          sx={{ mt: 1, mb: 0 }}
        >
          <Typography variant="h4" color={"#43B97F"}>
            {" "}
            Create an account
          </Typography>
          <Typography variant="body1" color={"#fff"}>
            {" "}
            Already have an account?
            <Link
              component={RouterLink}
              to="/login"
              color="#ffcc4a"
              style={{ textDecoration: "none", paddingLeft: 5 }}
            >
              Login
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
            <Grid
              item
              xs={12}
              color="#fff"
              sx={{ mb: 2, borderRadius: "15px" }}
            >
              <Box component="span" sx={{ fontSize: 10 }}>
                First Name
              </Box>
              <Box sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={values.firstName}
                  onChange={(e) => handleInputChange(e)}
                  required
                  fullWidth
                  id="firstName"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#000",
                    },
                  }}
                  background="#fff"
                  size="small"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={!!errors.firstName && errors.firstName}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2, borderRadius: "15px" }}>
              <Box component="span" sx={{ fontSize: 10 }}>
                Last Name
              </Box>
              <Box sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#000",
                    },
                  }}
                  name="lastName"
                  onChange={(e) => handleInputChange(e)}
                  value={values.lastName}
                  autoComplete="family-name"
                  size="small"
                  error={!!errors.lastName}
                  helperText={!!errors.lastName && errors.lastName}
                />
              </Box>
            </Grid>
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
                  value={values.email}
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="email"
                  size="small"
                  error={!!errors.email}
                  helperText={!!errors.email && errors.email}
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
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="new-password"
                  size="small"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "#000",
                    },
                  }}
                  error={!!errors.password}
                  helperText={!!errors.password && errors.password}
                />
              </Box>
            </Grid>
          </Grid>
          <RoundedButton
            onClick={(e) => handleSubmit(e)}
            type="submit"
            variant="contained"
            sx={{ mt: 1, mb: 2, width: "512px" }}
            xs={12}
          >
            Create Account
          </RoundedButton>

          <Divider
            sx={{
              width: "100%",
              "&::before, &::after": {
                borderColor: "#fff",
                borderBottomWidth: 42,
              },
              mt: 2,
            }}
          >
            Or
          </Divider>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 5, mb: 2, textTransform: "capitalize" }}
          >
            Continue with Google
          </Button>
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
