import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import s from "./ServiceComponent.module.scss";
import classNames from "classnames";

interface ServiceProps {
  image: StaticImageData;
  text: string;
  className?: string;
}

const ServiceComponent: FC<ServiceProps> = ({ image, text, className }) => {
  return (
    <div className={classNames(s.services, className)}>
      <Image className={s.services__image} src={image} alt="Image" />
      <p className={s.services__text}>{text}</p>
    </div>
  );
};

export default ServiceComponent;
