import SliderSection from "../section/references_page/SliderSection";
import s from "./page.module.scss";

export async function generateMetadata({}) {
  return { title: "Berb - References" };
}

export default function References() {
  return <div><SliderSection/ ></div>;
}
