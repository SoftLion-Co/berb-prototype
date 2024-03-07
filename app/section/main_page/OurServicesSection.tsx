import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesComponent from "@/components/main_page/OurServicesCardComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const OurServicesSection = () => {
  return (
    <MotionWrapper tag="section" initial viewport className={s.container}>
      <div className={s.services}>
        <MainTitleComponent title="Our Services" titleLevel="h2" />
        <OurServicesComponent />
      </div>
    </MotionWrapper>
  );
};

export default OurServicesSection;
