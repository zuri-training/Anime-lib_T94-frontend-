import "./password_reset.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import { $api } from "../../shared/api";

const PasswordReset = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resetCode = searchParams.get("code") || "invalid";
  const [values, setValues] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: "", severity: "error" });

  const closeAlert = () => {
    setAlert({ ...alert, message: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.password !== values.confirmPassword) {
      return;
    }

    const { password } = values;
    const payload = { password, resetCode };
    $api
      .$post("/auth/reset-password", payload)
      .then(() => {
        setAlert({ severity: "success", message: "Password reset successful" });
        setTimeout(navigate, 1000, "/login");
      })
      .catch((error) => {
        if (error.status === 422) {
          setErrors(error.errors);
          return;
        }

        setAlert({ severity: "error", message: error.message });
      });
  };

  useEffect(() => {
    if (values.password && values.password !== values.confirmPassword) {
      setErrors((errors) => ({
        ...errors,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setErrors((errors) => ({ ...errors, confirmPassword: "" }));
    }
  }, [values.confirmPassword, values.password]);

  return (
    <div>
      <div className="main">
        <div className="formContainer">
          <h2 className="headTwo">Reset your password</h2>
          <p className="one">Key in your new password </p>
          <form action="post" onSubmit={handleSubmit}>
            <label htmlFor="email">New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your New Password"
              required
              value={values.password}
              onChange={handleChange}
            />
            <Typography component="small">{errors.password}</Typography>
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your New Password"
              required
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <Typography component="small">{errors.confirmPassword}</Typography>
            <button className="resetResetBtn">Reset Password</button>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!alert.message}
        autoHideDuration={6000}
        onClose={closeAlert}
      >
        <Alert
          onClose={closeAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PasswordReset;
