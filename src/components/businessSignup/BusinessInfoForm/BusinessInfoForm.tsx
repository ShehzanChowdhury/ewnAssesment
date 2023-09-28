import { TextField, styled } from "@mui/material";

const StyledDiv = styled("div")(() => ({
  padding: "15px 0",
  width: "800px",
  display: "grid",
  gap: "15px",
  gridTemplateColumns: "1fr 1fr",
}));

const BusinessInfoForm = () => {
  return (
    <>
      <StyledDiv>
        <TextField label="Business Name*" variant="outlined" fullWidth />
        <TextField
          label="Website or Social Media URL*"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Trade Licence*"
          type="file"
          variant="outlined"
          fullWidth
        />
        <TextField label="District/State*" variant="outlined" fullWidth />
        <TextField label="City/Town*" variant="outlined" fullWidth />
        <TextField label="Post Code/ Zip Code*" variant="outlined" fullWidth />
      </StyledDiv>
      <TextField label="Address*" variant="outlined" fullWidth />
    </>
  );
};

export default BusinessInfoForm;
