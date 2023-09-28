import { LayoutInterface } from "@/models/types/layouts";
import { styled } from "@mui/material";

const StyledMain = styled("main")(() => ({
  height: "100%",
}));

const HomePageLayout = ({ children }: LayoutInterface) => (
  <StyledMain>{children}</StyledMain>
);

export default HomePageLayout;
