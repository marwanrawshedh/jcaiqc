"use client";
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { storeToken, clearToken, getToken, getRole } from "../helper/auth";

const AuthContext = createContext<{
  token: string | null;
  login: (newToken: string, role: string) => void;
  logout: (callBack?: () => void) => void;
  isLoggedIn: boolean;
  role: string | null;
}>({
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  role: null,
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<null | string>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);

  const login = (newToken: string, role: string) => {
    setToken(newToken);
    storeToken(newToken, role);
    setRole(role);
    setIsLoggedIn(true);
  };

  const logout = (callBack?: () => void) => {
    callBack?.();
    setToken(null);
    setRole(null);
    clearToken();
    setIsLoggedIn(false);
  };
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = getToken();
      const storedRole = getRole();

      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
        setRole(storedRole);
      }
    }
  }, [role]);
  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
