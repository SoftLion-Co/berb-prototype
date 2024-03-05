"use client";
import React from "react";
import s from "./SliderSection.module.scss";
import SliderComponent from "@/components/reference_page/SliderComponent";

import Sanitary1 from "@/images/SanitaryPage/SanitarySection/SanitaryOne.png";
import Sanitary2 from "@/images/SanitaryPage/SanitarySection/SanitaryTwo.png";
import Sanitary3 from "@/images/HomePage/ReferencesSection/ReferencesFour.png";
import Sanitary4 from "@/images/SanitaryPage/HeroSection/SanitaryHero.png";
import Sanitary5 from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import Sanitary6 from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";

import Heating1 from "@/images/HeatingPage/HeatingSection/HeatingTwo.png";
import Heating2 from "@/images/HeatingPage/HeatingSection/HeatingOne.png";
import Heating3 from "@/images/ReferencesPage/HeatingThree.png";
import Heating4 from "@/images/SanitaryPage/HeroSection/SanitaryHero.png";
import Heating5 from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import Heating6 from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";

import Solar1 from "@/images/ReferencesPage/SolarOne.png";
import Solar2 from "@/images/SolarPage/SolarSection/SolarOne.png";
import Solar3 from "@/images/SolarPage/SolarSection/SolarTwo.png";
import Solar4 from "@/images/SanitaryPage/HeroSection/SanitaryHero.png";
import Solar5 from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import Solar6 from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";

const SliderSection = () => {
  const Slider1Images = [
    Sanitary1,
    Sanitary2,
    Sanitary3,
    Sanitary4,
    Sanitary5,
    Sanitary6,
  ];
  const Slider2Images = [
    Heating1,
    Heating2,
    Heating3,
    Heating4,
    Heating5,
    Heating6,
  ];
  const Slider3Images = [Solar1, Solar2, Solar3, Solar4, Solar5, Solar6];

  return (
    <section className={s.sliders}>
      <SliderComponent images={Slider1Images} title="Sanitary" />
      <SliderComponent images={Slider2Images} title="Heating" />
      <SliderComponent images={Slider3Images} title="Solar" />
    </section>
  );
};

export default SliderSection;
