"use client";
import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lightest?: string;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#33ff33",
      dark: "#00ff00",
      light: "#66ff66",
      lightest: "#ccffcc",
    },
    secondary: {
      main: "#ffff19",
      dark: "#ffff00",
      light: "#ffff66",
      lightest: "#ffff99",
    },
    grey: {
      "100": "#ebebe7",
      "200": "#d8d8d0",
      "300": "#c4c4b8",
      "400": "#b1b1a1",
      "500": "#9d9d89",
    },
    background: {
      default: "#f7fafc",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      color: "#2B3445",
      fontSize: "50px",
    },
    h5: {
      fontSize: "25px",
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "12px",
    },
    caption: {
      fontSize: "10px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 24px",
          border: "none",
          fontWeight: 600,
          borderRadius: "5px",
          textTransform: "capitalize",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: ({ theme }) => ({
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        }),
        outlined: ({ theme }) => ({
          transition: ".6s",
          background: "transparent",
          border: "1px solid #33ff33",
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        }),
        text: {
          background: "#ccffcc",
          color: "#00ff00",
          "&:hover": {
            background: "#ccffcc",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "0",
        },
        root: {
          padding: "10px",
          borderRadius: "5px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        },
      },
    },
  },
});

export default theme;
