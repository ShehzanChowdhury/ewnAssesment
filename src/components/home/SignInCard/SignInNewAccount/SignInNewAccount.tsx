import { Typography } from "@mui/material";
import Link from "next/link";

const SignInNewAccount = () => (
  <Typography variant="body1">
    Dont have an Account?
    <Link href={"/signup"}>Create New</Link>
  </Typography>
);

export default SignInNewAccount;
