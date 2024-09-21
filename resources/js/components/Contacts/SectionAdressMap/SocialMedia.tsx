import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { Sprite } from "../../Sprite";

export const SocialMedia: FunctionComponent<{className?:string}> = ({className}) => {
  const iconVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <div className={`${className} h-[32px] flex w-full gap-2 `}>
      <>
        <motion.span
          className="inline-block h-full aspect-square"
          whileHover="hover"
          whileTap="tap"
          variants={iconVariants}
        >
          <Sprite whatsUp={true} />
        </motion.span>
        <motion.span
          className="inline-block h-full aspect-square"
          whileHover="hover"
          whileTap="tap"
          variants={iconVariants}
        >
          <Sprite telegram={true} />
        </motion.span>
      </>
    </div>
  );
};
