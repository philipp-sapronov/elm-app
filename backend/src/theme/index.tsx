import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
  overrides: {},
  palette: {
    // background: {},
    // error: {},
    // grey: {},
    // info: {},
    // primary: {},
    // secondary: {},
    // success: {},
  },
});

export const customPalette = {};

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
