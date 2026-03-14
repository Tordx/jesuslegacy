import Footer from "@/navigation/footer";
import Header from "@/navigation/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default layout;
