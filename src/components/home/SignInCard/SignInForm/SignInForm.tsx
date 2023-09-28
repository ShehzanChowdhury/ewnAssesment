import { Button } from "@/components/ui";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

const StyledDiv = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const SignInForm = () => (
  <>
    <TextField label="Email*" variant="outlined" fullWidth />
    <TextField label="Password*" variant="outlined" fullWidth />
    <StyledDiv>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <Link href="#">
        <Typography> Forgot password?</Typography>
      </Link>
    </StyledDiv>
    <Button fullWidth> Sign In</Button>
  </>
);

export default SignInForm;
