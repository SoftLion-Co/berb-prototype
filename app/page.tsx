import React from "react";
import HeroSection from "@/app/section/main_page/HeroSection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";

export async function generateMetadata({}) {
  return { title: "Berb" };
}

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <HelpFurtherSection />
    </React.Fragment>
  );
}
