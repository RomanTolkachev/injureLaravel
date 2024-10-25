import { FunctionComponent, useEffect } from "react";
import { partners } from "../../../services/utils/partners";
import { motion, useAnimation } from "framer-motion";
import { CarouselItem } from "./CarouselItem";

interface IProps {
    className?: string;
    speed?: number;
    spacing?: number;
}

export const Carousel: FunctionComponent<IProps> = ({
    className,
    spacing = 8,
    speed = 5,
}) => {
    const controls = useAnimation();

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: ["0%", "-100%"],
                transition: {
                    x: {
                        duration: partners.length * 5,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                },
            });
        };
        startAnimation();
    }, [controls]);

    return (
        <div
            className={`${className} absolute h-20 max-w-screen-2xl overflow-hidden py-5`}
        >
            <div className={"flex h-full w-max"}>
                <motion.div
                    className={"inline-block h-full w-max"}
                    animate={controls}
                >
                    {partners.map((logo, index) => {
                        return (
                            <CarouselItem key={index} logoPath={logo.path} />
                        );
                    })}
                </motion.div>
                <motion.div
                    className={"inline-block h-full w-max"}
                    animate={controls}
                >
                    {partners.map((logo, index) => {
                        return (
                            <CarouselItem key={index} logoPath={logo.path} />
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};
