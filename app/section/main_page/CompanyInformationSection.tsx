import classNames from "classnames";
import s from "./CompanyInformationSection.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

const InformationData = [
  { amount: "2020", info: "FOUNDED" },
  { amount: "5", info: "TEAM MEMBER" },
  { amount: "500", info: "PROJECTS" },
  { amount: "100%", info: "HAPPY CLIENTS" },
];

const CompanyInformationSection = () => {
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
            <span className={s.info__amount}>{item.amount}</span>
            <span className={s.info__text}>{item.info}</span>
          </MotionWrapper>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default CompanyInformationSection;
