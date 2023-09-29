import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";

import { Button, PasswordInput } from "@/components/ui";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  styled,
  CircularProgress,
} from "@mui/material";
import { SignInInputs } from "@/models/types";

const StyledDiv = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const SignInForm = () => {
  // The following is dummy code to simulate the behavior
  const [result, setResult] = useState({
    isLoading: false,
    isError: false,
  });
  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    setResult({
      isLoading: true,
      isError: false,
    });
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setResult({
      isLoading: false,
      isError: true,
    });
  };

  const handleAlertClose = () => {
    setResult({
      isLoading: false,
      isError: false,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({});

  return (
    <>
      {result.isError && (
        <Alert severity="error" onClose={handleAlertClose}>
          Timeout exceeded of 5s.
        </Alert>
      )}
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
      <Button
        fullWidth
        onClick={handleSubmit(onSubmit)}
        disabled={result.isLoading}
      >
        Sign In
        {result.isLoading && (
          <>
            ...
            <CircularProgress size={15} />
          </>
        )}
      </Button>
    </>
  );
};

export default SignInForm;
