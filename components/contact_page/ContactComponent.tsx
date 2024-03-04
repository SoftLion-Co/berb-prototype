import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import s from "./ContactComponent.module.scss";
import MainTitleComponent from "../MainTitleComponent";
import MainButtonComponent from "../MainButtonComponent";

import Geolocation from "@/images/Vector/Connection/Geolocation.svg";
import Mail from "@/images/Vector/Connection/Mail.svg";
import Phone from "@/images/Vector/Connection/Phone.svg";

interface ContactProps {
  className?: string;
}

const ConnectionProps = [
  {
    text: "Berbstr. 1, Cologne, Germany",
    icon: Geolocation,
    href: "https://www.google.com/maps/search/Berbstr.+1,+Cologne,+Germany/@50.957239,6.6376888,10z/data=!3m1!4b1?entry=ttu",
    target: "_blank",
  },
  { text: "berb@gmail.com", icon: Mail, href: "mailto:berb@gmail.com" },
  { text: "0221/12 12 23 15", icon: Phone, href: "tel:+022112122315" },
];

const ContactComponent: FC<ContactProps> = ({ className }) => {
  return (
    <div className={classNames(s.box, className)}>
      <div className={s.background}>
        <div className={classNames(s.container, s.contact)}>
          <div className={s.contact__container}>
            <MainTitleComponent
              className={s.contact__title}
              title="CONTACT"
              color="white"
            />
            <address className={s.contact__address}>
              {ConnectionProps.map((item, index) => (
                <Link
                  className={s.contact__link}
                  key={index}
                  href={item.href}
                  target={item.target}
                >
                  <Image
                    className={s.contact__icon}
                    src={item.icon}
                    alt={item.text}
                  />
                  {item.text}
                </Link>
              ))}
            </address>
          </div>
          <div className={s.contact__container}>
            <p className={s.contact__content}>
              <span className={s.contact__text}>
                Broken pipe, defective heating or installation of a new
                washbasin - we come and help you out.
              </span>
              <span className={s.contact__text}>
                Our 24h emergency service will be happy to assist you!
              </span>
            </p>

            <MainButtonComponent
              className={s.contact__button}
              text="Call 24 hours emergency number"
              href=""
              background="white"
              color="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
