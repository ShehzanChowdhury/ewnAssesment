import { styled } from "@mui/material";
import { LayoutInterface } from "@/models/types";
import { Navbar } from "@/components/ui";
import Footer from "@/components/ui/Footer";

const StyledMain = styled("main")(() => ({
  height: "100vh",
}));

const BaseLayout = ({ children }: LayoutInterface) => (
  <StyledMain>
    <Navbar />
    {children}
    <Footer />
  </StyledMain>
);

export default BaseLayout;
