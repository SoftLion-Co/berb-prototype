import React from "react";
import HeroSection from "@/app/section/main_page/HeroSection";
import CompanyInformationSection from "@/app/section/main_page/CompanyInformationSection";
import AboutCompanySection from "@/app/section/main_page/AboutCompanySection";
import OurServicesSection from "@/app/section/main_page/OurServicesSection";
import ReferencesSection from "@/app/section/main_page/ReferencesSection";
import OurTeamSection from "@/app/section/main_page/OurTeamSection";
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
      <OurServicesSection />
      <ReferencesSection />
      <OurTeamSection />
      <HelpFurtherSection />
    </React.Fragment>
  );
}
