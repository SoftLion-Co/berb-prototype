import s from "./page.module.scss";

import ServiceSection from "@/app/section/certified_page/ServiceSection";
import HowCanHelpSection from "@/app/section/main_page/HowCanHelpSection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";
import ServiceHeadingComponent from "@/components/ServiceHeadingComponent";

import SolarOne from "@/images/SolarPage/SolarSection/SolarOne.png";
import Solartwo from "@/images/SolarPage/SolarSection/Solartwo.png";

export async function generateMetadata({}) {
  return { title: "Berb - Solar" };
}

const SolarObject = [
  {
    image: SolarOne,
    text: "Solar energy is the energy of the future. The sun shines every day, giving us warmth, light and energy.",
  },
  {
    image: Solartwo,
    text: "Energy that you can use to take warm showers and heat your home. This way you can reduce your heating costs and save valuable fuel.",
  },
];

export default function Solar() {
  return (
    <>
      <ServiceHeadingComponent
        title="Solar"
        text="we are a certified company & provide best plumbing services for you & your company."
      />

      {SolarObject.map((item, index) => (
        <ServiceSection key={index} image={item.image} text={item.text} />
      ))}

      <HowCanHelpSection className={s.box} />

      <HelpFurtherSection />
    </>
  );
}
