import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../contexts/auth-context";

export function RequireAuth() {
  const useAuth = useContext(AuthContext);
  if (!useAuth?.isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}
