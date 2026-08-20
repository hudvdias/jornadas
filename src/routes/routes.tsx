import { Route, Routes } from "react-router";
import { NoRequireAuth } from "../components/authentication/no-require-auth";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { LoginPage } from "../pages/authentication/login";
import { RegisterPage } from "../pages/authentication/register";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { ManagerPage } from "../pages/dashboard/manager";
import { HomePage } from "../pages/home";
import { NotFounPage } from "../pages/not-found";

export function AppRoutes() {
  return (
    <Routes>
      {/** Home Page - Hero */}
      <Route index element={<HomePage />}></Route>

      {/** Auth Routes */}
      <Route element={<NoRequireAuth />}>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
      </Route>

      {/** Dashboard Routes */}
      {/* <Route element={<RequireAuth />}> */}
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="manager" element={<ManagerPage />}></Route>
      </Route>
      {/* </Route> */}

      {/** Fallback */}
      <Route path="*" element={<NotFounPage />}></Route>
    </Routes>
  );
}
