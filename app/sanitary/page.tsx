import s from "./page.module.scss";

import ServiceSection from "@/app/section/certified_page/ServiceSection";
import HowCanHelpSection from "@/app/section/main_page/HowCanHelpSection";
import HelpFurtherSection from "@/app/section/main_page/HelpFurtherSection";
import ServiceHeadingComponent from "@/components/ServiceHeadingComponent";

import SanitaryOne from "@/images/SanitaryPage/SanitarySection/SanitaryOne.png";
import SanitaryTwo from "@/images/SanitaryPage/SanitarySection/SanitaryTwo.png";
import classNames from "classnames";

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

const ListObject = [
  {
    item: "Comprehensive & competent advice",
  },
  {
    item: "Complete bathroom renovations",
  },
  {
    item: "Professional execution of all installation work",
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

      <ul className={classNames(s.container, s.services__list)}>
        {ListObject.map((item, index) => (
          <li className={s.services__item} key={index}>
            {item.item}
            <hr className={s.services__line} />
          </li>
        ))}
      </ul>

      <HowCanHelpSection className={s.box} />

      <HelpFurtherSection />
    </>
  );
}
