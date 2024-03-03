import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./LearnMoreComponent.module.scss";
import ArrowNavigation from "@/images/Vector/Navigation/ArrowNavigation.svg";
import ArrowNavigationBlack from "@/images/Vector/Navigation/ArrowNavigationBlack.svg";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  color?: "black" | "white";
}

const LearnMoreComponent: FC<ButtonProps> = ({
  text,
  href,
  className,
  color = "white",
}) => {
  const arrowImage = color === "black" ? ArrowNavigationBlack : ArrowNavigation;
  const textColor = color === "black" ? s.blackText : s.whiteText;

  return (
    <Link className={classNames(s.learn, className)} href={href}>
      <span className={classNames(s.learn__text, textColor)}>{text}</span>

      <Image
        className={classNames(s.learn__image, textColor)}
        src={arrowImage}
        alt="Arrow Navigation"
      />
    </Link>
  );
};

export default LearnMoreComponent;
