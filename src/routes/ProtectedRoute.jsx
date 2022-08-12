// import { Navigate, useOutlet } from "react-router-dom";
import { useOutlet } from "react-router-dom";

// import { useAuth } from "../hooks/useAuth";
import Navbar from "../shared/components/Navigation/AuthenticatedNavbar/AuthenticatedNavbar";
import Footer from "../shared/components/Footer";

export const ProtectedLayout = (props) => {
  // const { user } = useAuth();
  const outlet = useOutlet();

  // if (!user) {
  //   return <Navigate to="/landing" />;
  // }

  return (
    <div>
      <Navbar activityCount={props.activityCount} />
        <main class="main">{outlet}</main>
      <Footer />
    </div>
  );
};
