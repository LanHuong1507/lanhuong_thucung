import Footer from "./Footer";
import Header from "./Header";
import BackToTopButton from "./BacktoTop";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
