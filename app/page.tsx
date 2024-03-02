import React from "react";
import HeroSection from "@/app/section/main_page/HeroSection";

export async function generateMetadata({}) {
  return { title: "Berb" };
}

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
    </React.Fragment>
  );
}
