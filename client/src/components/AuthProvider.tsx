import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { authContextTypes, userType } from "../Types/propsType";

export const AuthContext = createContext<authContextTypes | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("token"),
  );

  const [user, setUser] = useState<userType | null>(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const res = await fetch("http://localhost:7890/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUser(data.user);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUser();
    }
  }, [isLoggedIn]);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
