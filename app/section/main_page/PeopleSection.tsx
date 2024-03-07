import s from "./PeopleSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import PeopleCardComponent from "@/components/main_page/PeopleCardComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const PeopleSection = () => {
  return (
    <MotionWrapper initial viewport className={s.box}>
      <div className={s.background}>
        <div className={s.container}>
          <MainTitleComponent
            title="What People´s Say"
            color="black"
            titleLevel="h2"
            className={s.people__title}
          />
          <PeopleCardComponent />
        </div>
      </div>
    </MotionWrapper>
  );
};

export default PeopleSection;
