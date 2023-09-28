import { LayoutInterface } from "@/models/types";
import { Navbar } from "@/components/ui";
import Footer from "@/components/ui/Footer";

const BaseLayout = ({ children }: LayoutInterface) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default BaseLayout;
