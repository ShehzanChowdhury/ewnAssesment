import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { IconButton, FormControl } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { Button, PasswordInput } from "@/components/ui";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { SignInInputs } from "@/models/types";

const StyledDiv = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({});

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {};
  return (
    <>
      <TextField
        label="Email*"
        {...register("email", { required: true })}
        error={!!errors.email}
        helperText={errors.email && "Email is required."}
      />
      <PasswordInput
        label="Password"
        register={register}
        value="password"
        required={true}
        error={!!errors.password}
        helperText={errors.password && "Password is required."}
      />
      <StyledDiv>
        <FormControlLabel
          control={<Checkbox {...register("remember")} />}
          label="Remember me"
        />
        <Link href="#">
          <Typography> Forgot password?</Typography>
        </Link>
      </StyledDiv>
      <Button fullWidth onClick={handleSubmit(onSubmit)}>
        Sign In
      </Button>
    </>
  );
};

export default SignInForm;
