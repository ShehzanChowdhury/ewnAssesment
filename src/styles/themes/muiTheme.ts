import customColors from "@/config/customColors";
import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: customColors.noriGreen as string,
    },
    secondary: {
      main: customColors.dirtyGreen as string,
    },
    background: {
      default: customColors.offWhite as string,
    },
  },
  typography: {
    h2: {
      fontSize: "32px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "22px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "12px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: customColors.dirtyGreen as string,
          ":hover": {
            backgroundColor: "#69822Faa",
          },
        },
        outlined: {
          borderColor: customColors.dirtyGreen as string,
          color: customColors.dirtyGreen as string,
        },
      },
    },
  },
});
