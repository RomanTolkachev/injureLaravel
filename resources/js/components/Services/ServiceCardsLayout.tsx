import React, { FunctionComponent, useMemo } from "react";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IServiceItem } from "../../services/utils/types";
import {useSelectorTyped as useSelector} from "../../services/hooks/typedUseSelector";

const parentVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      delayChildren: 0.2,
    },
  },
};

const listVariants = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

interface IProps {
  currentType: "physical" | "business";
  className?: string;
}

export const ServiceCardsLayout: FunctionComponent<IProps> = ({
  currentType,
  className,
}) => {
  const servicesData = useSelector(state => state.servicesState.servicesData)
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
  };
  const location = useLocation();
  const filtered: IServiceItem[] | null = useMemo(() => {
      if (servicesData) {
          return servicesData.filter((item: IServiceItem) => item.type === currentType);
      } else {
          return null
      }
  }, [currentType, servicesData]);

  return (
    <motion.ul
      key={currentType}
      variants={parentVariants}
      initial="start"
      animate="end"
      className={`${className} sm:grid-container small-grid-container mx-4 grid grid-flow-dense auto-rows-fr grid-cols-1 gap-2 py-4 sm:mx-auto sm:max-w-screen-sm sm:grid-cols-2 sm:gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-3`}
    >
      {filtered!.map((item, key) => {
        return (
          <motion.li
            onClick={(e) => handleClick(e)}
            variants={listVariants}
            className={`${item.size} h-full w-full `}
            key={key}
          >
            <Link to={`${item.id}`} state={{ background: location }}>
              <ServiceCard serviceData={item} className={``} />
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
