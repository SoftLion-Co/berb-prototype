import React, { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  background?: "black" | "white";
  color?: "black" | "white";
  onClick?: () => void;
  custom?: number;
}

const MainButtonComponent: FC<ButtonProps> = ({
  text,
  href,
  className,
  background = "black",
  color = "black",
  onClick,
  custom = 1,
}) => {
  const backgroundColor = background === "black" ? s.black : s.white;
  const textColor = color === "black" ? s.blackText : s.whiteText;

  return (
    <MotionWrapper variants custom={custom}>
      <Link
        className={classNames(
          s.main__button,
          backgroundColor,
          textColor,
          className
        )}
        onClick={onClick}
        href={href}
      >
        {text}
      </Link>
    </MotionWrapper>
  );
};

export default MainButtonComponent;
