import { Card, styled } from "@mui/material";
import SignInTitle from "./SignInTitle";
import SignInNewAccount from "./SignInNewAccount";
import SignInForm from "./SignInForm";

const StyledCard = styled(Card)(() => ({
  padding: "30px",
  width: "500px",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  gap: "20px",
}));

const SignInCard = () => (
  <StyledCard>
    <SignInTitle />
    <SignInForm />
    <SignInNewAccount />
  </StyledCard>
);

export default SignInCard;
