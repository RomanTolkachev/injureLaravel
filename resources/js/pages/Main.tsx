import { FunctionComponent } from "react";
import { Hero } from "../components/Main/Hero";
import { CallUs } from "../components/CallUs/CallUs";
import { team } from "../services/team";
import { News } from "../components/Main/News/News";

export const Main: FunctionComponent = () => {
  return (
    <div>
      <Hero />
      <News />
      <CallUs employee={team[0]} />
    </div>
  );
};
