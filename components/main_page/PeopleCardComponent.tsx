import Image from "next/image";
import s from "./PeopleCardComponent.module.scss";
import OurTeam from "@/images/HomePage/OurTeamSection/OurTeam.png";
import MotionWrapper from "@/hooks/MotionWrapper";

const PeopleCardData = [
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
  {
    title: "Top Service",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    photo: OurTeam,
    name: "Steffan Copeland",
    position: "private customer",
  },
];

const PeopleCardComponent = () => {
  return (
    <div className={s.people}>
      {PeopleCardData.map((item, index) => (
        <MotionWrapper initial viewport variants className={s.people__container} key={index}>
          <h3 className={s.people__title}>„{item.title}“</h3>
          <p className={s.people__text}>{item.text}</p>

          <div className={s.people__info}>
            <Image className={s.people__photo} src={item.photo} alt="Photo" />

            <p className={s.people__about}>
              <span className={s.people__name}>{item.name}</span>
              <span className={s.people__position}>{item.position}</span>
            </p>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
};

export default PeopleCardComponent;
