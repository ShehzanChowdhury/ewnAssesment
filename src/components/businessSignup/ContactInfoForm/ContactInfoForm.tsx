import {
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  styled,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const StyledDiv = styled("div")(() => ({
  padding: "15px 0",
  width: "800px",
  display: "grid",
  gap: "15px",
  gridTemplateColumns: "1fr 1fr",
}));

const ContactInfoForm = () => {
  const [role, setRole] = useState("");

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <StyledDiv>
      <TextField label="First Name*" variant="outlined" fullWidth />
      <TextField label="Last Name*" variant="outlined" fullWidth />
      <TextField label="Phone*" type="number" variant="outlined" fullWidth />
      <TextField label="Email*" variant="outlined" fullWidth />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleRoleChange}
        >
          <MenuItem value={5}>None</MenuItem>
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={30}>System User</MenuItem>
          <MenuItem value={20}>Super Admin</MenuItem>
        </Select>
      </FormControl>
      <TextField label="National ID Number*" variant="outlined" fullWidth />
      <TextField label="Password*" variant="outlined" fullWidth />
      <TextField label="Confirm Password*" variant="outlined" fullWidth />
    </StyledDiv>
  );
};

export default ContactInfoForm;
