import { CssBaseline, GlobalStyles } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { theme } from "../styles/theme";
import { AuthContextProvider } from "./auth-context-provider";

type Props = { children: ReactNode };

export function Providers(props: Props) {
  return (
    <>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <AuthContextProvider>
              <>{props.children}</>
            </AuthContextProvider>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
