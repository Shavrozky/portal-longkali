// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37", // Emas adat Paser
      light: "#EEDC82",
      dark: "#997A15",
    },
    secondary: {
      main: "#A0522D", // Tembaga / Kayu Ulin
    },
    background: {
      default: "#0D0C0A", // Hitam arang tanah Telake
      paper: "#171512",
    },
    text: {
      primary: "#F5F2EB",
      secondary: "#B8B2A7",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: "0.04em",
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: "0.03em",
    },
    h3: {
      fontFamily: '"Cinzel", serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
