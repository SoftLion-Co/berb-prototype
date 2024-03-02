import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./LearnMoreComponent.module.scss";
import ArrowNavigation from "@/images/Vector/Navigation/ArrowNavigation.svg";

interface ButtonProps {
  text: string;
  href: string;
}

const LearnMoreComponent: FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link className={s.learn} href={href}>
      <span className={s.learn__text}>{text}</span>

      <Image
        className={s.learn__image}
        src={ArrowNavigation}
        alt="Arrow Navigation"
      />
    </Link>
  );
};

export default LearnMoreComponent;
