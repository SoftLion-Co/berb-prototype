import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import s from "./FooterComponent.module.scss";

import Instagram from "@/images/Vector/SocialNetworks/Instagram.svg";
import Twitter from "@/images/Vector/SocialNetworks/Twitter.svg";
import Linkedin from "@/images/Vector/SocialNetworks/Linkedin.svg";
import YouTube from "@/images/Vector/SocialNetworks/YouTube.svg";
import Facebook from "@/images/Vector/SocialNetworks/Facebook.svg";
import MotionWrapper from "@/hooks/MotionWrapper";

const socialMediaLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/" },
  { name: "YouTube", icon: YouTube, href: "https://www.youtube.com/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
];

const NavigationItem = [
  { text: "sanitary", href: "/sanitary" },
  { text: "heating", href: "/heating" },
  { text: "solar", href: "/solar" },
  { text: "references", href: "/references" },
];

const InformationItem = [
  { text: "Instructions", href: "/instructions" },
  { text: "Licensing", href: "/licensing" },
  { text: "Contact Us", href: "/contact" },
  { text: "Privacy policy", href: "/privacy-policy" },
];

const FooterComponent = () => {
  return (
    <footer className={classNames(s.footer, s.box)}>
      <div className={s.footer__all}>
        <div className={s.background}>
          <div className={classNames(s.container, s.footer__content)}>
            <Link className={s.footer__logo} href="/">
              BERB
            </Link>

            <hr className={s.footer__line} />

            <MotionWrapper initial viewport className={classNames(s.footer__container)}>
              <MotionWrapper variants   className={s.info}>
                <p className={s.info__text}>
                  Berb is a master business, in the 1st generation, which was
                  founded in 2020 in Cologne.
                </p>
                <Link className={s.info__link} href={"mailto:berb@gmail.com"}>
                  <span
                    className={s.text}
                    style={{ textTransform: "lowercase" }}
                  >
                    berb@gmail.com
                  </span>
                </Link>
                <Link className={s.info__link} href={"tel:+4922112122315"}>
                  <span className={s.text}>+49 221 12 12 23 15</span>
                </Link>
              </MotionWrapper>

              <div className={s.navigation}>
                {InformationItem.map((item, index) => (
                  <MotionWrapper variants custom={index}>
                    <Link href={item.href} key={index}>
                      <span className={s.text}>{item.text}</span>
                    </Link>
                  </MotionWrapper>
                ))}
              </div>

              <nav className={s.navigation}>
                {NavigationItem.map((item, index) => (
                  <MotionWrapper variants custom={index+4}>
                    <Link href={item.href} key={index}>
                      <span className={s.text}>{item.text}</span>
                    </Link>
                  </MotionWrapper>
                ))}
              </nav>
            </MotionWrapper>

            <hr className={s.footer__line} />
          </div>
        </div>
        <div className={classNames(s.footer__box)}>
          <p>© All rights reserved.</p>

          <div className={s.social__list}>
            {socialMediaLinks.map((socialMedia, index) => (
              <Link
                className={s.social__background}
                key={index}
                href={socialMedia.href}
                target="_blank"
              >
                <Image
                  className={s.social__icon}
                  src={socialMedia.icon}
                  alt={socialMedia.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
