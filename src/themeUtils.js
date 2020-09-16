import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#455a64",
      main: "#1c313a",
      dark: "#000914",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#5ddef4",
      main: "#00acc1",
      dark: "#007c91",
      contrastText: "#000000",
    },
  },
  typography: {
    h3: {
      color: "#1c313a",
      fontWeight: 800,
      textTransform: "none",
      fontSize: "3rem",
      lineHeight: "3rem",
      margin: 0,
    },
    fontFamily: ["Century Gothic Std"].join(","),
  },
});

export default theme;
