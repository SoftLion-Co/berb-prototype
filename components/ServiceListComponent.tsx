import React, { FC } from "react";
import classNames from "classnames";
import s from "./ServiceListComponent.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

type Data = {
  item: string;
};

const ServiceListComponent: FC<{ services: Data[] }> = ({ services }) => {
  return (
    <>
      <ul className={classNames(s.container, s.services__list)}>
        {services.map((item, index) => (
          <MotionWrapper tag="li" variants viewport initial className={s.services__item} key={index}>
            {item.item}
            <hr className={s.services__line} />
          </MotionWrapper>
        ))}
      </ul>
    </>
  );
};

export default ServiceListComponent;
