import React, { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

const MainButtonComponent: FC<ButtonProps> = ({
  text,
  href,
  className,
  onClick,
}) => {
  return (
    <Link
      className={classNames(s.main__button, className)}
      onClick={onClick}
      href={href}
    >
      {text}
    </Link>
  );
};

export default MainButtonComponent;
