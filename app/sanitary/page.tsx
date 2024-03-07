import s from "./page.module.scss";

import ServiceSection from "@/app/section/certified_page/ServiceSection";
import HowCanHelpSection from "@/app/section/main_page/HowCanHelpSection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";
import ServiceHeadingComponent from "@/components/ServiceHeadingComponent";
import ServiceListComponent from "@/components/ServiceListComponent";

import SanitaryOne from "@/images/SanitaryPage/SanitarySection/SanitaryOne.png";
import SanitaryTwo from "@/images/SanitaryPage/SanitarySection/SanitaryTwo.png";

import { SanitaryData } from "@/data/ServiceData";

export async function generateMetadata({}) {
  return { title: "Berb - Sanitary" };
}

const SanitaryObject = [
  {
    image: SanitaryOne,
    text: "Would you like a new bathroom? Or would you like to carry out a long-overdue modernization? In us you will find a competent and reliable partner",
  },
  {
    image: SanitaryTwo,
    text: "Professionally and thoroughly, we carry out all plumbing work for you, from simple maintenance or assembly to complex plumbing installations. We also perform thermographies for non-destructive pipe burst location.",
  },
];

export default function Sanitary() {
  return (
    <>
      <ServiceHeadingComponent
        title="Sanitary"
        text="we are a certified company & provide best plumbing services for you & your company."
      />

      {SanitaryObject.map((item, index) => (
        <ServiceSection key={index} image={item.image} text={item.text} />
      ))}

      <ServiceListComponent services={SanitaryData} />

      <HowCanHelpSection className={s.box} />

      <HelpFurtherSection />
    </>
  );
}
