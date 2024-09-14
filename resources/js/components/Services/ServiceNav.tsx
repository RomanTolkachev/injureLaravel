import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { motion } from "framer-motion";

interface IProps {
  currentType: string;
  setCurrentType: Dispatch<SetStateAction<"physical" | "business">>;
}

export const clickTapHandler = (
  e:
    | MouseEvent
    | TouchEvent
    | PointerEvent
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setStateAction: Dispatch<SetStateAction<any>>,
  dispatchAttribute: string,
) => {
  if (e.type === "tap") {
    setStateAction(dispatchAttribute);
  } else if (e.type === "click") {
    if ("isTrusted" in e && !e.isTrusted) return;
    setStateAction(dispatchAttribute);
  }
};

export const ServiceNav: FunctionComponent<IProps> = ({
  currentType,
  setCurrentType,
}) => {
  return (
    <div
      className={
        "border-my-gray-light mx-auto grid w-fit grid-cols-2 gap-2 overflow-hidden rounded-3xl border p-1 text-sm font-bold sm:text-xl md:text-3xl [&>*]:first-letter:capitalize"
      }
    >
      <motion.button
        animate={{
          boxShadow:
            currentType === "physical"
              ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
              : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
          color: currentType === "physical" ? "#211C1C" : "#B7B7B7",
        }}
        className={
          "pointer-events-auto text-nowrap rounded-2xl p-4 text-center"
        }
        onClick={(e) => clickTapHandler(e, setCurrentType, "physical")}
        onTap={(e) => clickTapHandler(e, setCurrentType, "physical")}
      >
        частным клиентам
      </motion.button>
      <motion.button
        animate={{
          boxShadow:
            currentType === "business"
              ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
              : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
          color: currentType === "business" ? "#211C1C" : "#B7B7B7",
        }}
        className={
          "pointer-events-auto text-nowrap rounded-2xl p-4 text-center"
        }
        onClick={(e) => clickTapHandler(e, setCurrentType, "business")}
        onTap={(e) => clickTapHandler(e, setCurrentType, "business")}
      >
        бизнесу
      </motion.button>
    </div>
  );
};
