import Image from "next/image";
import s from "./HeroSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import LearnMoreComponent from "@/components/LearnMoreComponent";
import HomeHero from "@/images/HomePage/HeroSection/HomeHero.png";
import classNames from "classnames";
import MotionWrapper from "@/hooks/MotionWrapper";

const HeroSection = () => {
  return (
    <MotionWrapper tag="section" initial viewport className={s.box}>
      <Image className={s.hero__image} src={HomeHero} alt="Home Hero" />
      <div className={classNames(s.container, s.hero__container)}>
        <MotionWrapper tag="h1" variants custom={1} className={s.hero__title}>
          YOUR PLUMBING SPECIALIST <br />
          IN COLOGNE
        </MotionWrapper>

        <MotionWrapper tag="p" variants custom={2}>
          we are a certified company & provide best plumbing services for you &
          your company.
        </MotionWrapper>

        <MotionWrapper variants custom={3} className={s.hero__buttons}>
          <MainButtonComponent
            text="Contact Us"
            href="/contact"
            color="white"
          />
          <LearnMoreComponent text="learn more" href="/" />
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
};

export default HeroSection;
