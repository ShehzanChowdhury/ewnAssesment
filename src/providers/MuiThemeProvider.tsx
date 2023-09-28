import { muiTheme } from "@/styles/themes";
import { ThemeProvider } from "@mui/material";

const MuiThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;

export default MuiThemeProvider;
