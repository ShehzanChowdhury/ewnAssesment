import { useState, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
      console.log(data);
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    })();
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, []);

  const handleStepperSubmit = useCallback(() => {
    handleContactSubmit((data) => {
      console.log(data);
    })();
  }, []);

  return (
    <SignupPageLayout>
      <SignUpFromCard varient="Business">
        <Stepper
          stepLabels={stepLabels}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={handleStepperSubmit}
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
