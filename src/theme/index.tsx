"use client";
import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#33ff33",
      dark: "#00ff00",
      light: "#66ff66",
      lighter: "#99ff99",
    },
    secondary: {
      main: "#ffff33",
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
          color: "#fff",
          fontWeight: 600,
          borderRadius: "5px",
          textTransform: "capitalize",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "40px",
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
