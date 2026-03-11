import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import type { authContextTypes } from "../Types/propsType";

export const useAuth = () => {
  const context = useContext<authContextTypes | null>(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
