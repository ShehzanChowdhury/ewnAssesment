import { type ReactNode } from "react";
import {
  Stepper as MuiStepper,
  Box,
  Step,
  StepLabel,
  CircularProgress,
} from "@mui/material";
import { Button } from "..";

interface StepperInterface {
  stepLabels: string[];
  activeStep: number;
  setActiveStep: (...args: any[]) => any;
  handleNext: (...args: any[]) => any;
  handleBack: (...args: any[]) => any;
  handleSubmit: (...args: any[]) => any;
  isDisable: boolean;
  children?: ReactNode;
}

/**
 * Stepper Component
 *
 * The `Stepper` component is a customizable and user-friendly component that helps guide users through a multi-step process.
 * It displays a set of steps, allows users to navigate between steps, and provides a button for advancing to the next step or submitting the form.
 *
 * @param {string[]} stepLabels - An array of strings representing the labels for each step in the process.
 * @param {number} activeStep - The current active step. It determines which step is currently displayed and highlighted.
 * @param {Function} setActiveStep - A callback function to update the active step when navigating between steps.
 * @param {Function} handleNext - A callback function to handle advancing to the next step when the user clicks the "Next" button.
 * @param {Function} handleBack - A callback function to handle moving back to the previous stepwhen the user clicks the "Back" button.
 * @param {Function} handleSubmit - A callback function to handle submitting the form or completing the process when the user clicks the "Submit" button.
 * @param {boolean} isDisable - A boolean value that determines whether the "Next" button is disabled. When set to `true`, the button is disabled, and a loading spinner is displayed next to it, indicating that an action is in progress.
 * @param {ReactNode} children - Any additional content or components that you want to include within the `Stepper`. This can be used for displaying step-specific content or forms.
 *
 * @returns {JSX.Element} The rendered `Stepper` component.
 */

const Stepper = ({
  stepLabels,
  activeStep,
  handleNext,
  handleBack,
  handleSubmit,
  isDisable,
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
          disabled={isDisable}
          onClick={
            activeStep >= stepLabels.length - 1 ? handleSubmit : handleNext
          }
          fullWidth
        >
          {activeStep >= stepLabels.length - 1 ? "Submit" : "Next"}
          {isDisable && (
            <>
              ... <CircularProgress size={15} />
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Stepper;
