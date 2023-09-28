import { Card, styled, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SignupCardInterface {
  icon: ReactNode;
  title: ReactNode;
  label: string;
  button: ReactNode;
}

const StyledCard = styled(Card)(() => ({
  padding: "50px 30px",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  gap: "20px",
}));

const SignupCard = ({ icon, title, label, button }: SignupCardInterface) => (
  <StyledCard>
    {icon}
    {title}
    <Typography>{label}</Typography>
    {button}
  </StyledCard>
);

export default SignupCard;
