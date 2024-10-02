import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { SectionDescription } from "../components/Header/SectionDescription";
import {Sprite} from "../components/Sprite";

export const Portfolio: FunctionComponent = () => {
  return (
    <>
      <SectionDescription
        header="портфолио"
        BGImage="/webp/sectionHeader/handShake.webp"
        className={"mb-10 2xl:mb-14"}
      />
      <div className="container justify-center items-center mb-10 flex flex-col">
          <h3 className={"p-10 text-2xl text-center first-letter:capitalize font-bold max-w-screen-md"}>
              у нас так много завершенных дел, что нашим программистам нужно еще немного времени, чтобы закончить эту страницу
          </h3>
          <motion.div
              className={"h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-[50%] overflow-hidden"}
              animate={{
                rotate: [0, 360],
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }
              }}
          >
              <Sprite gear={true} />
          </motion.div>
      </div>
    </>
  );
};
