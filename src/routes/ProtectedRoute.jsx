import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from '../shared/components/Navbar';

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/landing" />;
  }

  return (
    <div>
      <Navbar />
      {outlet}
    </div>
  );
};
