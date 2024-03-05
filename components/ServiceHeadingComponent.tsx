import classNames from "classnames";
import React, { FC } from "react";
import s from "./ServiceHeadingComponent.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import LearnMoreComponent from "@/components/LearnMoreComponent";

type ServiceHeadingProps = {
  className?: string;
  text?: string;
};

const ServiceHeadingComponent: FC<ServiceHeadingProps> = ({
  className,
  text,
}) => {
  return (
    <div className={classNames(s.service, s.container, className)}>
      <MainTitleComponent title="Sanitary" />

      {text && <p className={s.service__text}>{text}</p>}

      <LearnMoreComponent text="Learn More" href="" />
    </div>
  );
};

export default ServiceHeadingComponent;
