import React from "react";
import s from "./page.module.scss";
import ContactSection from "../section/contact_page/ContactSection";

export async function generateMetadata({}) {
  return { title: "Berb - Contact Us" };
}

export default function Contact() {
  return (
    <React.Fragment>
      <ContactSection />
    </React.Fragment>
  );
}
