import Link from "next/link";
import classNames from "classnames";
import s from "./HelpFurtherSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import MainTitleComponent from "@/components/MainTitleComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const HelpFurtherSection = () => {
  return (
    <MotionWrapper initial viewport className={classNames(s.container, s.help__container)}>
      <MainTitleComponent
        titleLevel="h2"
        title="We help you further"
        color="white"
      />

      <MotionWrapper tag="p" variants className={s.help__text} custom={2}>
        <span>
          Broken pipe, defective heating or installation of a new washbasin - we
          come and help you out.
        </span>
        <span>Our 24h emergency service will be happy to assist you!</span>
      </MotionWrapper>

      <MainButtonComponent
        text="Call 24 hours emergency number"
        href="/"
        background="white"
        color="black"
        custom={3}
      />
    </MotionWrapper>
  );
};

export default HelpFurtherSection;
