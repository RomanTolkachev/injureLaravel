import { motion } from "framer-motion";
import React, { FunctionComponent, useState } from "react";
import { Sprite } from "../Sprite";
import { IServiceItem } from "../../services/utils/types";

interface IServiceCard {
  className?: string;
  serviceData: IServiceItem;
}

export const ServiceCard: FunctionComponent<IServiceCard> = ({
  className,
  serviceData,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsHover(true);
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsHover(false);
  };

  const imageHover = {
    scale: 1.05,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  };

  const imageNotHover = {
    scale: 1.01,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  };

  const maskHover = {
    opacity: 0.6,
  };

  const maskNotHover = {
    opacity: 0.8,
  };

  return (
    <motion.div
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={(e) => handleLeave(e)}
      className={`${className} relative h-full w-full overflow-hidden bg-purple-100`}
    >
      <div className={"absolute bottom-0 left-0 right-0 top-0 z-[2]"}>
        <motion.img
          animate={isHover ? imageHover : imageNotHover}
          className="block h-full w-full object-cover"
          src={serviceData.image ?? "/images/service-images/nasledstvo.webp"}
          alt="pic"
        />
      </div>
      <motion.div
        animate={isHover ? maskHover : maskNotHover}
        className={"absolute z-[3] h-full w-full bg-[#000D8199]"}
      />
      {/* prettier-ignore */}
      <div className={"hidden absolute p-5 z-[4] h-full sm:flex flex-col justify-between"}>
        <h4 className={" h-full w-full text-2xl font-bold text-my-white uppercase"}>
          <span className={"block w-full"}>{serviceData.title}</span>
        </h4>
        <span
          className={"block text-my-white first-letter:capitalize underline underline-offset-4"}
        >
        подробнее
        </span>
      </div>
      <div className="absolute z-[4] flex h-full w-full items-center justify-between p-5 text-my-white sm:hidden">
        <h4 className="flex h-full w-full items-center align-middle text-xl font-bold uppercase">
          {serviceData.title}
        </h4>
        <span className="h-[50px] w-[50px] -rotate-90">
          <Sprite className="" arrow={true} />
        </span>
      </div>
    </motion.div>
  );
};
