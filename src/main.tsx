import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./providers/providers";
import { AppRoutes } from "./routes/routes";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </StrictMode>,
);
