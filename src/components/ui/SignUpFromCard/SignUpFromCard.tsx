import type { ReactNode } from "react";
import { Card, Typography, styled } from "@mui/material";
import Link from "next/link";

interface SignUpFromCardInterface {
  varient: "Individual" | "Business";
  children: ReactNode;
}

const StyledCard = styled(Card)(() => ({
  padding: "20px",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  gap: "15px",
}));

const SignUpFromCard = ({ varient, children }: SignUpFromCardInterface) => (
  <StyledCard>
    <Typography variant="h2">Lets Get started with</Typography>
    <Typography variant="h4">{varient}</Typography>
    <Typography variant="body1">
      Please provide the following information
    </Typography>
    {children}
    <Typography variant="body1">
      Already have an account? <Link href={"/"}>Sign In</Link>
    </Typography>
  </StyledCard>
);

export default SignUpFromCard;
