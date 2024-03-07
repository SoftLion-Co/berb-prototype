import React, { FC } from "react";
import classNames from "classnames";
import s from "./MainTitleComponent.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

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
    <MotionWrapper tag={TitleTag} variants
      className={classNames(s.title, className, {
        [s.title__black]: color === "black",
      })}
    >
      {title}
    </MotionWrapper>
  );
};

export default MainTitleComponent;
