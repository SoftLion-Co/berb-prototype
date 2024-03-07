import s from "./OurTeamSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";

const OurTeamData = [
  {
    name: "Raphael Slater",
    position: "CEO / MASTER INSTALLER",
  },
  {
    name: "Mario Mcclain",
    position: "MASTER INSTALLER",
  },
  {
    name: "Mitchell Wilson",
    position: "INSTALLER",
  },
  {
    name: "Grover Kelley",
    position: "INSTALLER",
  },
  {
    name: "Seth Blair",
    position: "INSTALLER",
  },
];

const OurTeamSection = () => {
  return (
    <section className={s.container}>
      <MainTitleComponent className={s.team__title} title="Out Team" />
      <div className={s.team__content}>
        {OurTeamData.map((item, index) => (
          <div className={s.team__container} key={index}>
            <p className={s.team__name}>{item.name}</p>
            <p className={s.team__position}>{item.position}</p>
            <hr className={s.team__line} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
