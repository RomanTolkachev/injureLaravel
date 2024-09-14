import { FunctionComponent, useState } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { ServiceCardsLayout } from "../components/Services/ServiceCardsLayout";
import { ServiceNav } from "../components/Services/ServiceNav";

export const Services: FunctionComponent = () => {
  const [currentType, setCurrentType] = useState<"business" | "physical">(
    "physical",
  );
  return (
    <div className="">
      <SectionDescription
        header="услуги"
        BGImage="/webp/sectionHeader/books.webp"
        className={"sm:mb-6 lg:mb-10 2xl:mb-14"}
        imgPosition={"object-top"}
      />
      <nav className={"pt-5 sm:mb-6 lg:mb-10"}>
        <ServiceNav currentType={currentType} setCurrentType={setCurrentType} />
      </nav>
      <div>
        <ServiceCardsLayout
          currentType={currentType}
          className={"sm:mb-6 lg:mb-10"}
        />
      </div>
      <CallUs employee={team[1]}></CallUs>
    </div>
  );
};
