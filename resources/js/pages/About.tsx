import { FunctionComponent, ReactNode } from "react";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { SectionDescription } from "../components/Header/SectionDescription";
import { WeHaveSomethingToSay } from "../components/About/WeHaveSomethingToSay";
import { AboutBlock } from "../components/About/AboutBlock";
import { Sprite } from "../components/Sprite";

const globalGoals: ReactNode = (
  <>
    <h4
      className={
        "mb-1 text-nowrap text-center text-xl font-bold first-letter:capitalize sm:mb-3 sm:pr-10 sm:text-start sm:text-xl md:mb-6 md:text-3xl lg:mb-10 lg:text-4xl"
      }
    >
      глобальные цели
    </h4>
    <p className={"text-sm sm:pr-10 sm:text-xs md:text-base lg:text-lg"}>
      Целью Компании является защита финансовых и имущественных интересов
      юридических и физических лиц с применением полного спектра правовых
      возможностей, которые предоставляет законодательство и судебная практика.
    </p>
  </>
);

export const About: FunctionComponent = () => {
  return (
    <div className={"bg-my-white"}>
      <SectionDescription
        header={"о компании"}
        BGImage="/webp/sectionHeader/about.webp"
        className={"mb-10 2xl:mb-14"}
        imgPosition={"object-bottom"}
      />
      <WeHaveSomethingToSay />
      <AboutBlock leftSide={globalGoals} rightSide={<Sprite court={true} />} />
      <CallUs employee={team[2]} />
    </div>
  );
};
