import React from "react";
import HeroSection from "@/app/section/main_page/HeroSection";
import CompanyInformationSection from "@/app/section/main_page/CompanyInformationSection";
import AboutCompanySection from "@/app/section/main_page/AboutCompanySection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";

export async function generateMetadata({}) {
  return { title: "Berb" };
}

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <CompanyInformationSection />
      <AboutCompanySection />
      <HelpFurtherSection />
    </React.Fragment>
  );
}
