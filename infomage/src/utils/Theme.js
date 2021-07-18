import { createMuiTheme } from "@material-ui/core";

const lightheme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(28, 209, 209, 1)",
      main: "rgba(1, 153, 153, 1)",
      dark: "rgba(30, 71, 71, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(241, 59, 124, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(38, 67, 109, 1)",
      default: "rgba(32, 47, 60, 1)"
    },
    primary: {
      light: "#7986cb",
      main: "rgba(72, 127, 177, 1)",
      dark: "#303f9f",
      contrastText: "rgba(246, 233, 255, 1)"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(198, 110, 168, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});

export { lightheme, darkTheme };
