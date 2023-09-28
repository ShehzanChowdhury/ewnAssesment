import Image from "next/image";
import Button from "../Button";

const LanguageSelector = () => (
  <Button
    variant="text"
    color="inherit"
    startIcon={<Image src={"/flag.jpg"} alt="" width={30} height={15} />}
  >
    English
  </Button>
);
export default LanguageSelector;
