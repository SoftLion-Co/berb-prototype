import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import s from "./HeaderConnectionComponent.module.scss";

import Geolocation from "@/images/Vector/Connection/Geolocation.svg";
import Mail from "@/images/Vector/Connection/Mail.svg";
import Phone from "@/images/Vector/Connection/Phone.svg";

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

const HeaderConnectionComponent = () => {
  return (
    <address className={classNames(s.container, s.header)}>
      {ConnectionProps.map((item, index) => (
        <Link
          className={s.header__link}
          key={index}
          href={item.href}
          target={item.target}
        >
          <Image className={s.header__image} src={item.icon} alt="Icon" />
          {item.text}
        </Link>
      ))}
    </address>
  );
};

export default HeaderConnectionComponent;
