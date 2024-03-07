"use client";
import React, { useLayoutEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import arrow from "@/images/Vector/Navigation/ArrowNavigationLong.svg";
import Image, { StaticImageData } from "next/image";
import s from "./SliderComponent.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

type SliderProps = {
  images: StaticImageData[];
  title: string;
};

const SliderComponent = ({ images, title }: SliderProps) => {
  const [slideWidth, setSlideWidth] = useState("302px");

  useLayoutEffect(() => {
    const calculateSlideWidth = () => {
      const screenWidth = window.innerWidth;

      let newSlideWidth = "302px";

      if (screenWidth >= 1920) {
        newSlideWidth = "602px";
      } else if (screenWidth >= 1280) {
        newSlideWidth = "502px";
      } else if (screenWidth >= 768) {
        newSlideWidth = "402px";
      }

      setSlideWidth(newSlideWidth);
    };

    calculateSlideWidth();

    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, []);

  return (
    <MotionWrapper variants initial viewport className={s.slider__container}>
      <div className={s.sidebar}>
        <MainTitleComponent
          color="white"
          title={title}
          titleLevel="h2"
          className={s.sidebar__title}
        />
      </div>
      <Carousel
        className={s.slider}
        align="start"
        slideSize={slideWidth}
        containScroll="trimSnaps"
        slidesToScroll={1}
        nextControlIcon={
          <Image src={arrow} alt="Next slide" className={s.slider__icon} />
        }
        previousControlIcon={
          <Image src={arrow} alt="Next slide" className={s.slider__icon_back} />
        }
        styles={{
          viewport: {
            position: "relative",
            marginBottom: "34px",

            "@media (min-width: 768px)": {
              marginBottom: "44px",
            },
            "@media (min-width: 1280px)": {
              marginBottom: "54px",
            },
            "@media (min-width: 1920px)": {
              marginBottom: "64px",
            },
          },
          slide: {
            paddingRight: "30px",

            "@media (min-width: 768px)": {
              paddingRight: "40px",
            },
            "@media (min-width: 1280px)": {
              paddingRight: "50px",
            },
            "@media (min-width: 1920px)": {
              paddingRight: "60px",
            },
          },
          controls: {
            display: "flex",
            justifyContent: "start",
            gap: "20px",
            position: "static",
            bottom: "0",
            height: "40px",

            "@media (min-width: 768px)": {
              gap: "50px",
            },
            "@media (min-width: 1280px)": {
              gap: "70px",
            },
            "@media (min-width: 1920px)": {
              gap: "80px",
            },
          },
          control: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
        }}
      >
        {images.map((image, index) => (
          <Carousel.Slide>
            <Image
              key={index}
              src={image.src}
              width={602}
              height={905}
              alt="Slider image"
              className={s.slider__image}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </MotionWrapper>
  );
};

export default SliderComponent;
