import { Button as MuiButton, type ButtonProps } from "@mui/material";

interface ButtonInterface extends ButtonProps {}

const Button = ({ children, ...buttonProps }: ButtonInterface) => {
  return (
    <MuiButton variant="contained" {...buttonProps}>
      {children}
    </MuiButton>
  );
};

export default Button;
