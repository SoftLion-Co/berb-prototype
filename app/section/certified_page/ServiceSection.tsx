import React, { FC } from "react";
import classNames from "classnames";
import s from "./ServiceSection.module.scss";
import { StaticImageData } from "next/image";
import ServiceComponent from "@/components/ServiceComponent";

interface ServiceSectionProps {
  image: StaticImageData;
  text: string;
}

const ServiceSection: FC<ServiceSectionProps> = ({ image, text }) => {
  return (
    <>
      <div className={classNames(s.services, s.container)}>

        <ServiceComponent image={image} text={text} />
      </div>
    </>
  );
};

export default ServiceSection;
