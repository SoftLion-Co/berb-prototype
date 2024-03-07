import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import s from "./ServiceComponent.module.scss";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";

interface ServiceProps {
  image: StaticImageData;
  text: string;
  className?: string;
}

const ServiceComponent: FC<ServiceProps> = ({ image, text, className }) => {
  return (
    <MotionWrapper initial viewport variants className={classNames(s.services, className)}>
      <Image className={s.services__image} src={image} alt="Image" />
      <MotionWrapper tag="p" variants initial viewport className={s.services__text}>{text}</MotionWrapper>
    </MotionWrapper>
  );
};

export default ServiceComponent;
