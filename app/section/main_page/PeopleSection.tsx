import s from "./PeopleSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import PeopleCardComponent from "@/components/main_page/PeopleCardComponent";

const PeopleSection = () => {
  return (
    <section className={s.box}>
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
    </section>
  );
};

export default PeopleSection;
