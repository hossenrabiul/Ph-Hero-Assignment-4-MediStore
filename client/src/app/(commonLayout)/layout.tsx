import React from "react";
import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
