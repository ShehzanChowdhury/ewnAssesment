import { type ReactNode } from "react";
import { Stepper as MuiStepper, Box, Step, StepLabel } from "@mui/material";
import { Button } from "..";

interface StepperInterface {
  stepLabels: string[];
  activeStep: number;
  setActiveStep: (...args: any[]) => any;
  handleNext: (...args: any[]) => any;
  handleBack: (...args: any[]) => any;
  handleSubmit: (...args: any[]) => any;
  children?: ReactNode;
}

const Stepper = ({
  stepLabels,
  activeStep,
  handleNext,
  handleBack,
  handleSubmit,
  children,
}: StepperInterface) => {
  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper activeStep={activeStep} alternativeLabel color="error">
        {stepLabels.map((stepLabel) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={stepLabel} {...stepProps}>
              <StepLabel>{stepLabel}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>

      {children}

      <Box sx={{ display: "flex", margin: "20px 0" }}>
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
          fullWidth
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={activeStep === stepLabels.length}
          onClick={
            activeStep >= stepLabels.length - 1 ? handleSubmit : handleNext
          }
          fullWidth
        >
          {activeStep >= stepLabels.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default Stepper;
