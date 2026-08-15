import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../contexts/auth-context";

export function NoRequireAuth() {
  const useAuth = useContext(AuthContext);
  if (useAuth?.isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}
