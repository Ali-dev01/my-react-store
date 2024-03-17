"use client";
import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#33ff33",
      dark: "#00ff00",
      light: "#66ff66",
      lighter: "#ccffcc",
    },
    secondary: {
      main: "#ffff19",
      dark: "#ffff00",
      light: "#ffff66",
      lighter: "#ffff99",
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
        contained: {
          background: "#33ff33",
          color: "#fff",
        },
        outlined: {
          transition: ".6s",
          background: "transparent",
          border: "1px solid #33ff33",
          "&:hover": {
            background: "#33ff33",
            color: "#fff",
          },
        },
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
