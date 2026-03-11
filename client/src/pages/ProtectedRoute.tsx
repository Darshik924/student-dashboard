import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
