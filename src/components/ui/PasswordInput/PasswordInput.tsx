import { useState } from "react";
import { TextField, IconButton, FormControl } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import type { UseFormRegister } from "react-hook-form";

interface PasswordInputInterface {
  register: UseFormRegister<any>;
  label: string;
  value: string;
  error: boolean;
  required: boolean;
  helperText?: string;
}

const PasswordInput = ({
  label,
  value,
  error,
  required,
  helperText,
  register,
}: PasswordInputInterface) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        type={showPassword ? "text" : "password"}
        error={error}
        helperText={helperText}
        {...register(value, { required })}
      />
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        sx={{
          position: "absolute",
          right: "5px",
          top: "5px",
        }}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </FormControl>
  );
};

export default PasswordInput;
