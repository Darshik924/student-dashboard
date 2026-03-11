import { Navigate } from "react-router-dom";
import { useAuth } from "../components/useAuth";

const AvatarProtectionRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/avatars" />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export default AvatarProtectionRoute;
