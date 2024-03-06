import classNames from "classnames";
import React, { FC } from "react";
import s from "./ServiceHeadingComponent.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import LearnMoreComponent from "@/components/LearnMoreComponent";

type ServiceHeadingProps = {
  title: string;
  text?: string;
  className?: string;
};

const ServiceHeadingComponent: FC<ServiceHeadingProps> = ({
  title,
  text,
  className,
}) => {
  return (
    <div className={classNames(s.service, s.container, className)}>
      <MainTitleComponent title={title} />

      {text && <p className={s.service__text}>{text}</p>}

      <LearnMoreComponent text="Learn More" href="" />
    </div>
  );
};

export default ServiceHeadingComponent;
