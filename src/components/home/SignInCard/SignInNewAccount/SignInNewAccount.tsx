import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "next/link";

const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const SignInNewAccount = () => (
  <Typography variant="body1">
    Dont have an Account?
    <Link href={"/signup"}>
      <StyledSpan> Create New.</StyledSpan>
    </Link>
  </Typography>
);

export default SignInNewAccount;
