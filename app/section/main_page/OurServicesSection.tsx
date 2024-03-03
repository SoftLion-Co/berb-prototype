import s from "./OurServicesSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import OurServicesComponent from "@/components/main_page/OurServicesCardComponent";

const OurServicesSection = () => {
  return (
    <section className={s.container}>
      <div className={s.services}>
        <MainTitleComponent title="Our Services" titleLevel="h2" />

        <OurServicesComponent />
      </div>
    </section>
  );
};

export default OurServicesSection;
