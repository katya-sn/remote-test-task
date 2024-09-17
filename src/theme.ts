import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#F8F9FA",
      dark: "#DA1F63",
      contrastText: "#344767",
      light: "#7B809A",
    },
    secondary: {
      main: "#FFD012",
      contrastText: "#E91F63",
      dark: "#202020",
    },
    error: {
      main: '#F44334',
    }
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

const theme = createTheme({
  ...baseTheme,
  typography: {
    h1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      color: baseTheme.palette.primary.contrastText,
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "20px",
      },
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "22.4px",
      color: baseTheme.palette.primary.contrastText,
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "19.6px",
      color: baseTheme.palette.primary.contrastText,
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16.8px",
      color: baseTheme.palette.primary.contrastText,
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: baseTheme.palette.primary.light,
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "19.6px",
    }
  },
});

export default theme;
