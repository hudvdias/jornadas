import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/authentication/login";
import { HomePage } from "../pages/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
    </Routes>
  );
}
