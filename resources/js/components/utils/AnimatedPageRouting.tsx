import React, { FunctionComponent, ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollToTop } from "./ScrollToTop";

const routingVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: { duration: 0.15, when: "beforeChildren", delayChildren: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

export const AnimatedPageRouting: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      variants={routingVariants}
      initial="start"
      animate="end"
      exit="exit"
      className="h-full w-full"
    >
      <ScrollToTop key="scrolTop" />
      {children}
    </motion.div>
  );
};
