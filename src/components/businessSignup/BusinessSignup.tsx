import { useState } from "react";
import { SignupPageLayout } from "../layouts";
import steps from "./Steps";
import SignUpFromCard from "../ui/SignUpFromCard";
import Stepper from "../ui/Stepper";

const BusinessSignup = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SignupPageLayout>
      <SignUpFromCard varient="Business">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </SignUpFromCard>
    </SignupPageLayout>
  );
};

export default BusinessSignup;
