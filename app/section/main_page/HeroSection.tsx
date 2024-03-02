import Image from "next/image";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import LearnMoreComponent from "@/components/LearnMoreComponent";
import HomeHero from "@/images/HomePage/HeroSection/HomeHero.png";
import classNames from "classnames";

const HeroSection = () => {
  return (
    <section className={s.box}>
      <Image
        className={s.hero__image}
        src={HomeHero}
        alt="Home Hero"
        width={1820}
      />
      <div className={classNames(s.container, s.hero__container)}>
        <h1 className={s.hero__title}>
          YOUR PLUMBING SPECIALIST <br />
          IN COLOGNE
        </h1>

        <p>
          we are a certified company & provide best plumbing services for you &
          your company.
        </p>

        <div className={s.hero__buttons}>
          <MainButtonComponent text="Contact Us" href="/contact" />
          <LearnMoreComponent text="learn more" href="/" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
