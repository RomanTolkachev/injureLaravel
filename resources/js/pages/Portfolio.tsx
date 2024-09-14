import { FunctionComponent } from "react";
import { SectionDescription } from "../components/Header/SectionDescription";

export const Portfolio: FunctionComponent = () => {
  return (
    <>
      <SectionDescription
        header="портфолио"
        BGImage="/webp/sectionHeader/handShake.webp"
        className={"mb-10 2xl:mb-14"}
      />
      <div className="container">я портфолио</div>
    </>
  );
};
