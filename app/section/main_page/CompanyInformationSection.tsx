"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import s from "./CompanyInformationSection.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

const InformationData = [
  { amount: 2020, info: "FOUNDED" },
  { amount: 5, info: "TEAM MEMBER" },
  { amount: 500, info: "PROJECTS" },
  { amount: 100, info: "HAPPY CLIENTS" },
];

const CompanyInformationSection = () => {
  const [displayedAmounts, setDisplayedAmounts] = useState(
    Array(InformationData.length).fill(0)
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${s.container}`);
      if (!element) return;

      const { top } = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animationDuration = 1500;

    if (isVisible) {
      const start = performance.now();
      const interval = setInterval(() => {
        const now = performance.now();
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / animationDuration);

        setDisplayedAmounts((prevAmounts) =>
          prevAmounts.map((amount, index) => {
            const targetAmount = InformationData[index].amount;
            const animatedAmount = Math.floor(progress * targetAmount);
            return animatedAmount;
          })
        );

        if (progress >= 1) {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <MotionWrapper
      tag="section"
      initial
      viewport
      className={classNames(s.container, s.info)}
    >
      <div className={s.info__content}>
        {InformationData.map((item, index) => (
          <MotionWrapper
            tag="p"
            variants
            custom={index}
            className={s.info__container}
            key={index}
          >
            <span className={s.info__amount}>
              {index === InformationData.length - 1
                ? displayedAmounts[index] + "%"
                : displayedAmounts[index]}
            </span>
            <span className={s.info__text}>{item.info}</span>
          </MotionWrapper>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default CompanyInformationSection;
