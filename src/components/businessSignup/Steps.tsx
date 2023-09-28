import { StepInterface } from "@/models/types";
import BusinessInfoForm from "./BusinessInfoForm";
import ContactInfoForm from "./ContactInfoForm";

const steps: StepInterface[] = [
  {
    label: "Business Info",
    content: <BusinessInfoForm />,
  },
  {
    label: "Contact Person Info",
    content: <ContactInfoForm />,
  },
];

export default steps;
