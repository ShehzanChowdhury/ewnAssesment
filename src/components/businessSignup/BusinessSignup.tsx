import { useState, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "@mui/material";

import { BusinessSignUpStepLabelEnum } from "@/models/enums";
import type { BusinessInfoInputs, ContactInfoInputs } from "@/models/types";
import { SignUpFromCard, Stepper } from "../ui";
import BusinessInfoForm from "./BusinessInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import { SignupPageLayout } from "../layouts";

const stepLabels: string[] = [
  BusinessSignUpStepLabelEnum.BUSINESS,
  BusinessSignUpStepLabelEnum.PERSONAL,
];

const BusinessSignup = () => {
  // The following is dummy code to simulate the behavior
  // On submit sets a loading state to check for 5000ms
  const [result, setResult] = useState({
    isLoading: false,
    isError: false,
  });
  const onSubmit: SubmitHandler<ContactInfoInputs> = async (data) => {
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

  const [activeStep, setActiveStep] = useState(0);

  const {
    register: registerBusiness,
    handleSubmit: handleBusinessSubmit,
    formState: { errors: businessErrors },
  } = useForm<BusinessInfoInputs>({});

  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    formState: { errors: contactErrors },
  } = useForm<ContactInfoInputs>({});

  const handleNext = useCallback(() => {
    handleBusinessSubmit((data) => {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    })();
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, []);

  const handleStepperSubmit = useCallback(() => {
    handleContactSubmit(onSubmit)();
  }, []);

  return (
    <SignupPageLayout>
      <SignUpFromCard variant="Business">
        {result.isError && (
          <Alert severity="error" onClose={handleAlertClose}>
            Timeout exceeded of 5s.
          </Alert>
        )}
        <Stepper
          stepLabels={stepLabels}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={handleStepperSubmit}
          isDisable={result.isLoading}
        >
          {stepLabels[activeStep] === BusinessSignUpStepLabelEnum.BUSINESS && (
            <BusinessInfoForm
              register={registerBusiness}
              errors={businessErrors}
            />
          )}
          {stepLabels[activeStep] === BusinessSignUpStepLabelEnum.PERSONAL && (
            <ContactInfoForm
              register={registerContact}
              errors={contactErrors}
            />
          )}
        </Stepper>
      </SignUpFromCard>
    </SignupPageLayout>
  );
};

export default BusinessSignup;
