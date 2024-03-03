import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./OurServicesCardComponent.module.scss";
import LearnMoreComponent from "@/components/LearnMoreComponent";

import ServicesSanitary from "@/images/HomePage/ServicesSection/ServicesSanitary.png";
import ServicesHeating from "@/images/HomePage/ServicesSection/ServicesHeating.png";
import ServicesSolar from "@/images/HomePage/ServicesSection/ServicesSolar.png";

const OurServicesData = [
  {
    image: ServicesSanitary,
    href: "/sanitary",
    title: "sanitary",
    text: "Would you like a new bathroom? Or would you like to carry out a long-overdue modernization? In us you will find a competent and reliable partner.",
  },
  {
    image: ServicesHeating,
    href: "/heating",
    title: "heating",
    text: "Would you like a new bathroom? Or would you like to carry out a long-overdue modernization? In us you will find a competent and reliable partner.",
  },
  {
    image: ServicesSolar,
    href: "/solar",
    title: "solar",
    text: "Would you like a new bathroom? Or would you like to carry out a long-overdue modernization? In us you will find a competent and reliable partner.",
  },
];

const OurServicesCardComponent = () => {
  return (
    <React.Fragment>
      {OurServicesData.map((item, index) => (
        <div className={s.services} key={index}>
          <div className={s.services__container}>
            <Image
              className={s.services__image}
              src={item.image}
              alt="Services Image"
            />
            <div className={s.services__info}>
              <Link href={item.href}>
                <span className={s.services__link}>{item.title}</span>
              </Link>
              <p className={s.services__text}>{item.text}</p>
              <LearnMoreComponent text="learn more" href={item.href} />
            </div>
          </div>

          {index !== OurServicesData.length - 1 && (
            <hr className={s.services__line} />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default OurServicesCardComponent;
