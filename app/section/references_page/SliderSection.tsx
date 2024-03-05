"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import image1 from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import image2 from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";
import image3 from "@/images/HomePage/ReferencesSection/ReferencesThree.png";
import image4 from "@/images/HomePage/ReferencesSection/ReferencesFour.png";
import image5 from "@/images/SanitaryPage/SanitarySection/SanitaryOne.png";
import image6 from "@/images/SanitaryPage/SanitarySection/SanitaryTwo.png";
import arrow from "@/images/Vector/Navigation/ArrowNavigationLong.svg";
import Image from "next/image";
import s from "./SliderSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";

const SliderSection = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const [slideWidth, setSlideWidth] = useState("302px");

  useEffect(() => {
    // Логіка, яка визначає динамічну ширину слайдів
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

    // Викликаємо функцію для розрахунку ширини слайдів під час монтажу компонента
    calculateSlideWidth();

    // Додаємо прослуховувач подій для зміни розміру вікна
    window.addEventListener("resize", calculateSlideWidth);

    // Прибираємо прослуховувач подій під час розмонтажу компонента
    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, []);

  return (
    <div className={s.section}>
      <div className={s.sideblock}>
        <MainTitleComponent
          color="white"
          title="SANITARY"
          titleLevel="h2"
          className={s.sideblock__title}
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
    </div>
  );
};

export default SliderSection;
