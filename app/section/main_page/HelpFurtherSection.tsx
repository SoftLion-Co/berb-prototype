import Link from "next/link";
import classNames from "classnames";
import s from "./HelpFurtherSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import MainTitleComponent from "@/components/MainTitleComponent";

const HelpFurtherSection = () => {
  return (
    <section className={classNames(s.container, s.help__container)}>
      <MainTitleComponent
        titleLevel="h2"
        title="We help you further"
        color="white"
      />

      <p className={s.help__text}>
        <span>
          Broken pipe, defective heating or installation of a new washbasin - we
          come and help you out.
        </span>
        <span>Our 24h emergency service will be happy to assist you!</span>
      </p>

      <MainButtonComponent
        text="Call 24 hours emergency number"
        href="/"
        background="white"
        color="black"
      />
    </section>
  );
};

export default HelpFurtherSection;
