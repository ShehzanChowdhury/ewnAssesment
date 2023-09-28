import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

import Button from "../Button";
import LanguageSelector from "../LanguageSelector";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: "0 40px",
          height: "65px ",
          "& button": { marginLeft: "20px" },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"}>DAK</Link>
          </Typography>
          <LanguageSelector />
          <Link href={"/"}>
            <Button variant="contained">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
