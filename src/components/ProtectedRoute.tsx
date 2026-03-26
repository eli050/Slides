import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./auth_components/UserContext";


export function ProtectedRoute(): JSXElement {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}