import { useCallback } from "react";
import {
  Stepper as MuiStepper,
  Box,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { Button } from "..";
import type { StepInterface } from "@/models/types";

interface StepperInterface {
  steps: StepInterface[];
  activeStep: number;
  setActiveStep: (...args: any[]) => any;
}

const Stepper = ({ steps, activeStep, setActiveStep }: StepperInterface) => {
  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, []);

  const handleSubmit = useCallback(() => {
    setActiveStep(0);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper activeStep={activeStep} alternativeLabel color="error">
        {steps.map((step) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>

      {steps[activeStep].content}

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
          disabled={activeStep === steps.length}
          onClick={activeStep >= steps.length - 1 ? handleSubmit : handleNext}
          fullWidth
        >
          {activeStep >= steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default Stepper;
