import Image from "next/image";
import classNames from "classnames";
import s from "./ContactSection.module.scss";
import ContactComponent from "@/components/contact_page/ContactComponent";
import ContactHero from "@/images/ContactPage/ContactHero/ContactHero.png";

const ContactSection = () => {
  return (
    <section className={s.contact}>
      <div className={s.box}>
        <Image
          className={s.contact__image}
          src={ContactHero}
          alt="Contact Hero"
        />
      </div>
      
      <ContactComponent className={s.contact__component} />
    </section>
  );
};

export default ContactSection;
