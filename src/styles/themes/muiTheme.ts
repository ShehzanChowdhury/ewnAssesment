import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#112617",
    },
    background: {
      default: "#F2F6F9",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#69822F",
          ":hover": {
            backgroundColor: "#69822Faa",
          },
        },
        outlined: {
          borderColor: "#69822F",
          color: "#69822F",
        },
      },
    },
  },
});
