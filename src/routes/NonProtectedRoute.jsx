import { Navigate, useOutlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import Navbar from "../shared/components/Navbar";

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
        </div>
    );
};
