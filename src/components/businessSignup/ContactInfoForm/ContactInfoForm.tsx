import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  MenuItem,
  Select,
  TextField,
  styled,
  FormControl,
  InputLabel,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ContactInfoInputs } from "@/models/types";
import { PasswordInput } from "@/components/ui";

interface ContactInfoFormInterface {
  register: UseFormRegister<ContactInfoInputs>;
  errors: FieldErrors<ContactInfoInputs>;
}

const StyledDiv = styled("div")(() => ({
  padding: "15px 0",
  width: "800px",
  display: "grid",
  gap: "15px",
  gridTemplateColumns: "1fr 1fr",
}));

const ContactInfoForm = ({ register, errors }: ContactInfoFormInterface) => {
  const [role, setRole] = useState("");

  const handleRoleChange = (event: SelectChangeEvent) => {
    register("role", { required: true, value: event.target.value });
    setRole(event.target.value);
  };

  return (
    <StyledDiv>
      <TextField
        label="First Name*"
        {...register("firstName", { required: true })}
        error={!!errors.firstName}
        helperText={errors.firstName && "Business Name is required."}
      />
      <TextField
        label="Last Name*"
        {...register("lastName", { required: true })}
        error={!!errors.lastName}
        helperText={errors.lastName && "Business Name is required."}
      />
      <TextField
        label="Phone*"
        type="number"
        {...register("phone", { required: true })}
        error={!!errors.phone}
        helperText={errors.phone && "Business Name is required."}
      />
      <TextField
        label="Email*"
        type="email"
        {...register("email", { required: true })}
        error={!!errors.email}
        helperText={errors.email && "Business Name is required."}
      />
      <FormControl fullWidth>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          value={role}
          label="Role"
          onChange={handleRoleChange}
          error={!!errors.role}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"admin"}>Admin</MenuItem>
          <MenuItem value={"system"}>System User</MenuItem>
          <MenuItem value={"super"}>Super Admin</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="National ID Number*"
        {...register("nidNumber", { required: true })}
        error={!!errors.nidNumber}
        helperText={errors.nidNumber && "NID Number is required."}
      />
      <PasswordInput
        label="Password"
        register={register}
        value="password"
        required={true}
        error={!!errors.password}
        helperText={errors.password && "Password is required."}
      />
      <PasswordInput
        label="Confirm Password"
        register={register}
        value="confirmPassword"
        required={true}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword && "Confirm Password is required."}
      />
    </StyledDiv>
  );
};

export default ContactInfoForm;
