import { Typography, styled } from "@mui/material";
import LanguageSelector from "../LanguageSelector";

const StyledFooter = styled("footer")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  padding: "10px 65px",
  justifyContent: "space-between",
  alignItems: "center",
  "& div": {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  "& #footer_links": {
    cursor: "pointer",
  },
}));

const Footer = () => (
  <StyledFooter>
    <Typography>@ example@Text Limited</Typography>
    <div id="footer_links">
      <Typography>FAQs</Typography>
      <Typography>FAQs</Typography>
      <Typography>FAQs</Typography>
      <Typography>FAQs</Typography>
      <Typography>FAQs</Typography>
    </div>
    <div>
      <LanguageSelector />
      <Typography>version 1.0.1</Typography>
    </div>
  </StyledFooter>
);

export default Footer;
