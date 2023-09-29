import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TextField, styled } from "@mui/material";
import type { BusinessInfoInputs } from "@/models/types";

interface BusinessInfoFormInterface {
  register: UseFormRegister<BusinessInfoInputs>;
  errors: FieldErrors<BusinessInfoInputs>;
}

const StyledDiv = styled("div")(() => ({
  padding: "15px 0",
  width: "800px",
  display: "grid",
  gap: "15px",
  gridTemplateColumns: "1fr 1fr",
}));

const BusinessInfoForm = ({ register, errors }: BusinessInfoFormInterface) => {
  return (
    <>
      <StyledDiv>
        <TextField
          label="Business Name*"
          {...register("businessName", { required: true })}
          error={!!errors.businessName}
          helperText={errors.businessName && "Business Name is required."}
        />
        <TextField
          label="Website or Social Media URL*"
          {...register("social", { required: true })}
          error={!!errors.social}
          helperText={errors.social && "Social media URL is required."}
        />
        <TextField
          label="Trade Licence*"
          type="file"
          {...register("tax", { required: false })}
        />
        <TextField
          label="District/State*"
          {...register("state", { required: true })}
          error={!!errors.state}
          helperText={errors.state && "State is required."}
        />
        <TextField
          label="City/Town*"
          {...register("town", { required: true })}
          error={!!errors.town}
          helperText={errors.town && "Town is required."}
        />
        <TextField
          label="Post Code/ Zip Code*"
          {...register("zip", { required: true })}
          error={!!errors.zip}
          helperText={errors.zip && "Zip is required."}
        />
      </StyledDiv>
      <TextField
        label="Address*"
        {...register("address", { required: true })}
        error={!!errors.address}
        helperText={errors.address && "address is required."}
      />
    </>
  );
};

export default BusinessInfoForm;
