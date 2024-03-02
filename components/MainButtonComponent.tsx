import React, { FC } from "react";
import Link from "next/link";
import s from "./MainButtonComponent.module.scss";

interface ButtonProps {
  text: string;
  href: string;
}

const MainButtonComponent: FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link className={s.main__button} href={href}>
      {text}
    </Link>
  );
};

export default MainButtonComponent;
