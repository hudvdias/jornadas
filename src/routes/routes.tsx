import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/authentication/login";
import { RegisterPage } from "../pages/authentication/register";
import { HomePage } from "../pages/home";
import { NotFounPage } from "../pages/not-found";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>

      {/** Fallback */}
      <Route path="*" element={<NotFounPage />}></Route>
    </Routes>
  );
}
