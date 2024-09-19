import React, {Dispatch, FunctionComponent, SetStateAction, useEffect, useRef} from "react";
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
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.TouchEvent<HTMLDivElement>,
  setStateAction: Dispatch<SetStateAction<any>>,
  dispatchAttribute: string,
) => {
    setStateAction(dispatchAttribute)
  if (e.type === "tap") {
      e.preventDefault()
      e.stopPropagation()
    setStateAction(dispatchAttribute);
  } else if (e.type === "click") {
      e.preventDefault()
      e.stopPropagation()
    if ("isTrusted" in e && !e.isTrusted) return;
      e.preventDefault()
      e.stopPropagation()
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
      onClick={() => console.log("сработал клик на родителе")}
    >
      <motion.div
        key={0}
        animate={{
          boxShadow:
            currentType === "physical"
              ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
              : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
          color: currentType === "physical" ? "#211C1C" : "#B7B7B7",
        }}
        className={
          "text-nowrap rounded-2xl p-4 text-center cursor-pointer"
        }
        onClick={(e) => clickTapHandler(e, setCurrentType, "physical")}
        onTouchEnd={(e) => clickTapHandler(e, setCurrentType, "physical")}
      >
        частным клиентам
      </motion.div>
      <motion.div
        key={1}
        animate={{
          boxShadow:
            currentType === "business"
              ? "-4px 3px 7px 3px rgba(34, 60, 80, 0.2)"
              : "-4px 3px 7px 3px rgba(34, 60, 80, 0)",
          color: currentType === "business" ? "#211C1C" : "#B7B7B7",
        }}
        className={
          "text-nowrap rounded-2xl p-4 text-center cursor-pointer"
        }
        onClick={(e) => clickTapHandler(e, setCurrentType, "business")}
        onTouchEnd={(e) => clickTapHandler(e, setCurrentType, "business")}
      >
        бизнесу
      </motion.div>
    </div>
  );
};
