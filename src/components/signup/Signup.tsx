import { Typography, styled } from "@mui/material";
import { SignupPageLayout } from "../layouts";

import { Button } from "../ui";
import IndivisualSignupCard from "./IndivisualSignupCard";
import BusinessSignupCard from "./BusinessSignupCard";

const StyledDiv = styled("div")(() => ({
  display: "grid",
  padding: "30px",
  gap: "20px",
  gridTemplateColumns: "1fr 1fr",
}));

const Signup = () => (
  <SignupPageLayout>
    <div>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Choose Account Type
      </Typography>
      <StyledDiv>
        <IndivisualSignupCard />
        <BusinessSignupCard />
      </StyledDiv>
    </div>
  </SignupPageLayout>
);

export default Signup;
