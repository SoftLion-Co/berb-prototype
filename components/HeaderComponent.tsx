import classNames from "classnames";
import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";

const NavigationItem = [
  { text: "sanitary", href: "/sanitary" },
  { text: "heating", href: "/heating" },
  { text: "solar", href: "/solar" },
  { text: "references", href: "/references" },
  { text: "contact us", href: "/contact" },
];

const HeaderComponent = () => {
  return (
    <header className={classNames(s.header, s.container)}>
      <Link className={s.header__logo} href="/">
        berb
      </Link>

      <nav className={s.header__navigation}>
        {NavigationItem.map((item, index) => (
          <Link className={s.header__item} key={index} href={item.href}>
            {item.text}
          </Link>
        ))}
      </nav>

      <MainButtonComponent text="contact us" href="/contact" />
    </header>
  );
};

export default HeaderComponent;
