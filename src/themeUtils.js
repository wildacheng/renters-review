import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#c0c0c0",
      main: "#F5F5F5",
      dark: "#a7a7a7",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "Times New Roman,serif",
  },
});

export default theme;
