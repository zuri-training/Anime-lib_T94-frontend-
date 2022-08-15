import { createContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/AboutUs/AboutUs";
import Error from "./pages/Error/Error.js";
import HomePage from "./pages/home/home.page";
import Landing from "./pages/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import ForgotPassword from "./components/passwordRecovery/password_recovery";
import ResetPassword from "./components/password_reset/password_reset";
import { NonProtectedLayout } from "./routes/NonProtectedRoute";
import { ProtectedLayout } from "./routes/ProtectedRoute";
import Activity from "./components/activity/activity";

export const ThemeContext = createContext(null);

function App() {
  return (
    <Routes>
      <Route element={<NonProtectedLayout />}>
        <Route exact path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/404" element={<Error />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<Activity />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
