import { Typography, styled } from "@mui/material";
import LanguageSelector from "../LanguageSelector";

const StyledFooter = styled("footer")(({ theme }) => ({
  width: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  padding: "0 65px",
  height: "60px",
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

/**
 * PasswordInput Component
 *
 * A reusable password input component that allows users to enter and toggle the visibility of a password.
 *
 * @param {string} label - The label for the password input.
 * @param {string} value - The name or value for the input field (for React Hook Form).
 * @param {boolean} error - Indicates whether there is an error with the input.
 * @param {boolean} required - Indicates whether the input is required.
 * @param {string} [helperText] - Optional helper text to display below the input.
 * @param {UseFormRegister<any>} register - The `register` function from React Hook Form for managing form state.
 *
 * @returns {JSX.Element} The rendered PasswordInput component.
 */

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
      <Typography>Version 1.0.1</Typography>
    </div>
  </StyledFooter>
);

export default Footer;
