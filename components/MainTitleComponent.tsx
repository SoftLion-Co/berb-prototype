import React, { FC } from "react";
import classNames from "classnames";
import s from "./MainTitleComponent.module.scss";

interface MainTitleProps {
  title: string;
  color?: "black" | "white";
  titleLevel?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const MainTitleComponent: FC<MainTitleProps> = ({
  title,
  className,
  titleLevel = "h1",
  color = "white",
}) => {
  const TitleTag = titleLevel || "h1";

  return (
    <TitleTag
      className={classNames(s.title, className, {
        [s.title__black]: color === "black",
      })}
    >
      {title}
    </TitleTag>
  );
};

export default MainTitleComponent;
