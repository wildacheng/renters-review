import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5ddef4',
      main: '#00acc1',
      dark: '#007c91',
      contrastText: '#000000',
    }
  },
  typography: {
    fontFamily: [
      'Century Gothic Std'
    ].join(',',)
  }
});

export default theme
