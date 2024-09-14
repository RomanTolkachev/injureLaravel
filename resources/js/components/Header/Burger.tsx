import React, {
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IMenuItem } from "../../services/utils/types";
import { Link } from "react-router-dom";

interface IBurgerProps {
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
  burgerOpen: boolean;
  className?: string;
  menuList: Array<IMenuItem>;
}

const motionVariants: Variants = {
  closed: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.4,
    },
  },
  onClose: {
    scaleY: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const listVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: 20, transition: { duration: 2 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: "spring", stiffness: 300, damping: 24 },
  },
};

export const Burger: FunctionComponent<IBurgerProps> = ({
  burgerOpen,
  className,
  menuList,
  setBurgerOpen,
}) => {
  const handleCloseBurger: MouseEventHandler<HTMLLIElement> = () => {
    return setBurgerOpen(false);
  };
  return (
    <AnimatePresence>
      {burgerOpen && (
        <motion.div
          key="burger"
          style={{ originY: 0 }}
          variants={motionVariants}
          initial="closed"
          animate="open"
          exit="onClose"
          className={`${className} max-h-svh overflow-y-scroll`}
        >
          <motion.ul
            variants={listVariants}
            style={{ pointerEvents: "auto" }}
            className="burger_nav flex h-fit w-full flex-col"
          >
            {menuList.map((item, key) => {
              return (
                <motion.li
                  variants={itemVariants}
                  onClick={handleCloseBurger}
                  key={key}
                  className="relative w-full text-nowrap p-2 text-end text-lg text-white first-letter:capitalize before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-[calc(100%-2rem)] before:-translate-x-1/2 before:px-6 before:content-[''] active:bg-my-main-blue [&:not(:last-of-type)]:before:bg-white"
                >
                  <Link className="block w-full p-2" to={item.path}>
                    {item.text}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
