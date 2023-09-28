import customColors from "@/config/customColors";
import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: customColors.noriGreen as string,
    },
    background: {
      default: customColors.offWhite as string,
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
