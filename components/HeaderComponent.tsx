"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import s from "./HeaderComponent.module.scss";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import BurgerMenu from "@/images/Vector/Navigation/BurgerMenu.svg";

import MainButtonComponent from "@/components/MainButtonComponent";

interface HeaderContentProps {
  className?: string;
  onClick?: () => void;
}

const NavigationItem = [
  { text: "sanitary", href: "/sanitary" },
  { text: "heating", href: "/heating" },
  { text: "solar", href: "/solar" },
  { text: "references", href: "/references" },
  { text: "contact us", href: "/contact" },
];

const HeaderLogo: FC<HeaderContentProps> = ({ className, onClick }) => {
  return (
    <Link
      className={classNames(s.header__logo, className)}
      onClick={onClick}
      href="/"
    >
      berb
    </Link>
  );
};

const HeaderContent: FC<HeaderContentProps> = ({ className, onClick }) => {
  return (
    <nav
      className={classNames(s.header__navigation, className)}
      onClick={onClick}
    >
      {NavigationItem.map((item, index) => (
        <Link className={s.header__item} key={index} href={item.href}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

const HeaderComponent = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleCloseModal = () => {
    close();
  };

  return (
    <>
      <header className={classNames(s.header, s.container)}>
        <div className={s.header__content}>
          <HeaderLogo />

          <HeaderContent className={s.content__desktop} />

          <MainButtonComponent
            className={s.button__desktop}
            text="contact us"
            href="/contact"
          />

          <Button className={s.modal__burger} onClick={open}>
            <Image
              className={s.modal__image}
              src={BurgerMenu}
              alt="Burger Menu"
              width={40}
              height={40}
            />
          </Button>
        </div>
      </header>

      <Modal
        className={s.modal}
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: "scale-x", duration: 200 }}
      >
        <div className={classNames(s.container, s.modal__container)}>
          <HeaderLogo className={s.modal__logo} onClick={handleCloseModal} />
          <HeaderContent
            className={s.content__mobile}
            onClick={handleCloseModal}
          />
          <MainButtonComponent
            className={s.button__mobile}
            text="contact us"
            href="/contact"
            onClick={handleCloseModal}
          />
        </div>
      </Modal>
    </>
  );
};

export default HeaderComponent;
