import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data) => {
      setUser(data);
      navigate("/home", { replace: true });
    },
    [navigate, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
