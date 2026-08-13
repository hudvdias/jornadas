import { CssBaseline } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { theme } from "../styles/theme";

type Props = { children: ReactNode };

export function Providers(props: Props) {
  return (
    <>
      <StyledEngineProvider>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <>{props.children}</>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
