import { Button as MuiButton, type ButtonProps } from "@mui/material";

interface ButtonInterface extends ButtonProps {}

/**
 * Button Component
 *
 * A reusable button component that wraps Material-UI's Button component.
 *
 * @param {ReactNode} children - The content to be displayed inside the button.
 * @param {ButtonProps} buttonProps - Additional props to be passed to the underlying Material-UI Button component.
 *
 * @returns {JSX.Element} The rendered Button component.
 */

const Button = ({ children, ...buttonProps }: ButtonInterface) => {
  return (
    <MuiButton variant="contained" {...buttonProps}>
      {children}
    </MuiButton>
  );
};

export default Button;
