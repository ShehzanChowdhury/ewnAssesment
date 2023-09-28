import { Button, SignupCard } from "@/components/ui";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const IndivisualSignupCard = () => (
  <SignupCard
    icon={<AccountCircleIcon fontSize="large" />}
    title={<Typography variant="h3">Individual</Typography>}
    label="For personal use(Regular Courier Service)"
    button={
      <Button variant="outlined" href={"/signup/individual"}>
        Sign up
      </Button>
    }
  />
);

export default IndivisualSignupCard;
