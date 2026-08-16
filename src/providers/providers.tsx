import { CssBaseline, GlobalStyles } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { theme } from "../styles/theme";
import { AuthContextProvider } from "./auth-context-provider";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

export function Providers(props: Props) {
  return (
    <>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <AuthContextProvider>
                <>{props.children}</>
              </AuthContextProvider>
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
