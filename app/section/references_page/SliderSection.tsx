"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import image1 from "@/images/HomePage/ReferencesSection/ReferencesOne.png";
import image2 from "@/images/HomePage/ReferencesSection/ReferencesTwo.png";
import image3 from "@/images/HomePage/ReferencesSection/ReferencesThree.png";
import image4 from "@/images/HomePage/ReferencesSection/ReferencesFour.png";
import arrow from "@/images/Vector/Navigation/ArrowNavigationLong.svg";
import Image from "next/image";
import s from "./SliderSection.module.scss";
import MainTitleComponent from "@/components/MainTitleComponent";
import classNames from "classnames";

const SliderSection = () => {
  const images = [image1, image2, image3, image4];

  
  return (
    <div className={s.section}>
      <div className={s.sideblock}>
        <MainTitleComponent
          color="white"
          title="SANITARY"
          titleLevel="h1"
          className={s.sideblock__title}
        />
      </div>
      <Carousel
        slideSize="602px"
        align="start"
        slideGap="xl"
        containScroll="trimSnaps"
        slidesToScroll={1}
        nextControlIcon={
          <Image src={arrow} alt="Next slide" className={s.slider__icon} />
        }
        previousControlIcon={
          <Image src={arrow} alt="Next slide" className={s.slider__icon_back} />
        }
        className={s.slider}
        styles={{
          viewport: {
            position: "relative",
            marginBottom: "64px",
          },
          slide: {
            paddingRight: "60px",
          },
          controls: {
            display: "flex",
            justifyContent: "start",
            gap: "80px",
            position: "static",
            bottom: "0",
            height: "40px",
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
