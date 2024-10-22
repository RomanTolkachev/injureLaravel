import { motion } from "framer-motion";
import React, { FunctionComponent, ReactNode } from "react";

interface IButtonHeroOrderProps {
    children: ReactNode;
    telephone: string;
    clackHandler?: () => any;
}
export const ButtonHeroOrder: FunctionComponent<IButtonHeroOrderProps> = ({
    telephone,
    children,
    clackHandler,
}) => {
    return (
        <div className="hidden h-full items-center gap-3 rounded-full bg-my-white py-1 pl-5 pr-1 text-xl text-my-main-blue lg:flex">
            <a
                href="tel:1234567890"
                className="text-header-nav font-semibold md:cursor-default"
            >
                {telephone}
            </a>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={clackHandler}
                className="h-full text-nowrap rounded-full bg-white px-6 text-header-order font-bold transition-all hover:bg-my-blue-light hover:text-white"
            >
                {children}
            </motion.button>
        </div>
    );
};
