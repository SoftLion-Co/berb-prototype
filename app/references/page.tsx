import ServiceHeadingComponent from "@/components/ServiceHeadingComponent";
import SliderSection from "../section/references_page/SliderSection";
import HowCanHelpSection from "../section/main_page/HowCanHelpSection";
import HelpFurtherSection from "../section/main_page/HelpFurtherSection";
import s from "./page.module.scss"

export async function generateMetadata({}) {
  return { title: "Berb - References" };
}

export default function References() {
  return (
    <>
      <ServiceHeadingComponent
        title="REFERENCES"
      />
      <SliderSection />
      <HowCanHelpSection className={s.box} />

      <HelpFurtherSection />
    </>
  );
}
