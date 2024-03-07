import s from "@/app/sanitary/page.module.scss";

import ServiceSection from "@/app/section/certified_page/ServiceSection";
import HowCanHelpSection from "@/app/section/main_page/HowCanHelpSection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";
import ServiceHeadingComponent from "@/components/ServiceHeadingComponent";
import ServiceListComponent from "@/components/ServiceListComponent";

import HeatingOne from "@/images/HeatingPage/HeatingSection/HeatingOne.png";
import HeatingTwo from "@/images/HeatingPage/HeatingSection/HeatingTwo.png";

import { HeatingData } from "@/data/ServiceData";

export async function generateMetadata({}) {
  return { title: "Berb - Heating" };
}

const HeatingObject = [
  {
    image: HeatingOne,
    text: "The prices for heating oil and natural gas are rising and rising. But with intelligent heating technology, you can drastically reduce rising energy costs.",
  },
  {
    image: HeatingTwo,
    text: "Innovative devices make it possible to curb energy consumption by up to 40%.",
  },
];

export default function Heating() {
  return (
    <>
      <ServiceHeadingComponent
        title="Heating"
        text="we are a certified company & provide best plumbing services for you & your company."
      />

      {HeatingObject.map((item, index) => (
        <ServiceSection key={index} image={item.image} text={item.text} />
      ))}

      <ServiceListComponent services={HeatingData} />

      <HowCanHelpSection className={s.box} />

      <HelpFurtherSection />
    </>
  );
}
