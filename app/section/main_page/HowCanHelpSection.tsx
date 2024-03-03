import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import s from "./HowCanHelpSection.module.scss";
import HelpSection from "@/images/HomePage/HelpSection/HelpSection.png";
import MainTitleComponent from "@/components/MainTitleComponent";
import MainButtonComponent from "@/components/MainButtonComponent";

interface HowCanHelpProps {
  className?: string;
  typeTag?: "div" | "section";
}

const HowCanHelpSection: FC<HowCanHelpProps> = ({
  className,
  typeTag = "section",
}) => {
  const TypeTag = typeTag || "h1";

  return (
    <TypeTag className={classNames(s.help, className)}>
      <Image className={s.help__image} src={HelpSection} alt="Help Image" />

      <div className={classNames(s.container)}>
        <div className={classNames(s.help__container)}>
          <MainTitleComponent
            title="How can we help you?"
            color="black"
            titleLevel="h2"
          />

          <p className={s.help__text}>
            Plumbing, Heating & Solar from Cologne. With us you get services
            from one from one source. Let us prepare your non-binding offer from
            us.
          </p>

          <MainButtonComponent text="request offer now" href="" color="white" />
        </div>
      </div>
    </TypeTag>
  );
};

export default HowCanHelpSection;
