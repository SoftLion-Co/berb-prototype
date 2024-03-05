import SliderSection from "../section/references_page/SliderSection";

export async function generateMetadata({}) {
  return { title: "Berb - References" };
}

export default function References() {
  return (
    <>
      <SliderSection />
    </>
  );
}
