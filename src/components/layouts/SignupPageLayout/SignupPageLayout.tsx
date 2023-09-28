import { LayoutInterface } from "@/models/types/layouts";
import { styled } from "@mui/material";

const StyledDiv = styled("div")(() => ({
  minHeight: "calc(100vh - 65px - 60px)",
  padding: "80px",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
}));

const SignupPageLayout = ({ children }: LayoutInterface) => (
  <StyledDiv>{children}</StyledDiv>
);

export default SignupPageLayout;
