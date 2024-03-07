import React, { FC } from "react";
import classNames from "classnames";
import s from "./ServiceListComponent.module.scss";

type Data = {
  item: string;
};

const ServiceListComponent: FC<{ services: Data[] }> = ({ services }) => {
  return (
    <>
      <ul className={classNames(s.container, s.services__list)}>
        {services.map((item, index) => (
          <li className={s.services__item} key={index}>
            {item.item}
            <hr className={s.services__line} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceListComponent;
