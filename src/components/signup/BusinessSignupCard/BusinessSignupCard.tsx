import { Button, SignupCard } from "@/components/ui";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Typography } from "@mui/material";
import Link from "next/link";

const BusinessSignupCard = () => (
  <SignupCard
    icon={<StorefrontIcon color="secondary" fontSize="large" />}
    title={
      <Typography variant="h3" color="secondary">
        Business
      </Typography>
    }
    label="For business use"
    button={<Button href="/signup/business">Sign up</Button>}
  />
);

export default BusinessSignupCard;
