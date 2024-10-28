import { FunctionComponent, MouseEventHandler } from "react";
import { PreloaderComponent } from "../utils/PreloaderComponent";
import { motion } from "framer-motion";

const buttonVariants = {
    animate: {
        scale: [1, 1.15, 1],
        color: ["#000000", "#808080", "#000000"],
        transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            repeatDelay: 2 }
    }
};

interface IProps {
    className?: string,
    isActive: boolean
    isPreloader: boolean
    activeText: string
    blockedText: string
    clickHandler?: MouseEventHandler<any>
}


export const PreloaderAnimatedButton: FunctionComponent<IProps> = (
    {   className,
        isActive,
        isPreloader,
        activeText,
        blockedText,
        clickHandler}) => {
    return (
        <div className={`${className} h-[120px] flex justify-center items-center !text-[#808080] font-black`}>
            {isActive
                ? (isPreloader
                    ? <PreloaderComponent className="h-[80px]" />
                    : <motion.button onClick={clickHandler} animate={"animate"} variants={buttonVariants}
                                     className="px-4 py-2">{activeText}</motion.button>)
                : <span className="px-4 py-2 text-my-deep-gray">{blockedText}</span>}
        </div>
    );
};

