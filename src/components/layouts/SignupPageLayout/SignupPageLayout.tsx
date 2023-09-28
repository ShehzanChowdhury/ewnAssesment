import { LayoutInterface } from "@/models/types/layouts";
import { styled } from "@mui/material";

const StyledDiv = styled("div")(() => ({
  minHeight: "calc(100vh - 65px - 60px)",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
}));

const HomePageLayout = ({ children }: LayoutInterface) => (
  <StyledDiv>{children}</StyledDiv>
);

export default HomePageLayout;
