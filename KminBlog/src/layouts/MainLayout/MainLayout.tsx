import Footer from "@site/src/components/Footer";
import Header from "@site/src/components/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
