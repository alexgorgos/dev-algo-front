import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/source-code-pro";
import "@fontsource/nunito-sans";
import "@fontsource/josefin-sans";

let theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Nunito Sans, sans-serif",
    h3: {
      letterSpacing: "0.2em",
    },
    h4: {
      fontFamily: "Josefin Sans, sans-serif",
    },
    h5: {
      lineHeight: 1.4,
      letterSpacing: "0.0em",
      wordSpacing: ".2em",
      fontFamily: "Josefin Sans, sans-serif",
    },
    body2: {
      lineHeight: 1.5,
      letterSpacing: ".09em",
    },
    subtitle2: {
      letterSpacing: ".07em",
    },
    contact: {
      fontSize: "1rem",
    },
    logo: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "1em",
      letterSpacing: ".01rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
