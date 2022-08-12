import { Navigate, useOutlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import Navbar from "../shared/components/Navigation/UnauthenticatedNavbar";
import Footer from "../shared/components/Footer";

export const NonProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Navbar />
      {outlet}
      <Footer />
    </div>
  );
};
