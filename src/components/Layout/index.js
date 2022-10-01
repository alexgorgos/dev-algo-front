import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import MenuBar from "../Menu";
import theme from "../../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
