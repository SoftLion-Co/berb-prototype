import Image from "next/image";
import classNames from "classnames";
import s from "./ReferencesSection.module.scss";
import LearnMoreComponent from "@/components/LearnMoreComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import HowCanHelpSection from "@/app/section/main_page/HowCanHelpSection";

import ReferencesOne from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import ReferencesTwo from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";
import ReferencesThree from "@/images/HomePage/ReferencesSection/ReferencesThree.png";
import ReferencesFour from "@/images/HomePage/ReferencesSection/ReferencesFour.png";

const ReferencesImages = [
  {
    image: ReferencesOne,
  },
  {
    image: ReferencesTwo,
  },
  {
    image: ReferencesThree,
  },
  {
    image: ReferencesFour,
  },
];

const ReferencesSection = () => {
  return (
    <section className={s.box}>
      <div className={s.background}>
        <div className={classNames(s.container, s.references)}>
          <MainTitleComponent
            className={s.references__title}
            titleLevel="h2"
            title="References"
            color="black"
          />
          <div className={s.references__content}>
            <div className={s.references__container}>
              {ReferencesImages.map((item, index) => (
                <Image
                  className={s.references__image}
                  key={index}
                  src={item.image}
                  alt="References"
                />
              ))}
            </div>

            <LearnMoreComponent
              className={s.references__learn}
              text="show me more references"
              href="/references"
              color="black"
            />
          </div>
        </div>
        <HowCanHelpSection />
      </div>
    </section>
  );
};

export default ReferencesSection;
