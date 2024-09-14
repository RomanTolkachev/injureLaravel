import { FunctionComponent } from "react";
import { team } from "../services/team";
import { EmployeeCard } from "../components/Team/EmployeeCard";
import { IEmployee } from "../services/utils/types";
import { SectionDescription } from "../components/Header/SectionDescription";
import { motion } from "framer-motion";

const teamVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const teamItemVariant = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
  },
};

export const Team: FunctionComponent = () => {
  return (
    <>
      <SectionDescription
        header="команда"
        BGImage="/webp/sectionHeader/handShake.webp"
        className={"mb-10 2xl:mb-14"}
      />
      <section className="container w-screen">
        <motion.ul
          initial="start"
          animate="end"
          variants={teamVariants}
          className=""
        >
          {team.map((person: IEmployee, key) => {
            return (
              <motion.li
                variants={teamItemVariant}
                key={key}
                className="[&>li]: mb-10"
              >
                <EmployeeCard person={person} />
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
    </>
  );
};
