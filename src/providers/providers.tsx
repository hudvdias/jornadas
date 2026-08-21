import { CssBaseline, GlobalStyles } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <>{props.children}</>
                </LocalizationProvider>
              </AuthContextProvider>
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
