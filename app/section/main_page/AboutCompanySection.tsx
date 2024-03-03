import React from "react";
import Link from "next/link";
import s from "./AboutCompanySection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import classNames from "classnames";

const AboutCompanyProps = [
  { text: "sanitary", href: "/sanitary" },
  { text: "heating", href: "/heating" },
  { text: "solar", href: "/solar" },
];

const AboutCompanySection = () => {
  return (
    <section className={classNames(s.container)}>
      <div className={s.company}>
        <div className={s.company__links}>
          {AboutCompanyProps.map((item, index) => (
            <Link className={s.company__link} href={item.href} key={index}>
              {item.text}
              {index !== AboutCompanyProps.length - 1 && <span>/</span>}
            </Link>
          ))}
        </div>
        <p className={s.company__text}>
          The company is a master business, in the 1st generation, which was
          founded in 2020 in Cologne. Our team of employees is specialized in
          all modern technologies around plumbing, heating and solar.
        </p>
        <MainButtonComponent
          text="make appointment now"
          href="/"
          background="white"
        />
      </div>
    </section>
  );
};

export default AboutCompanySection;
