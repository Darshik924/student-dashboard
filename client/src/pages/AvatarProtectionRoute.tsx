import { Navigate } from "react-router-dom";

const AvatarProtectionRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/avatars" />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export default AvatarProtectionRoute;
