import { createContext, FunctionComponent, useEffect } from "react";
import { partners } from "../../../services/utils/partners";
import { motion, useAnimation } from "framer-motion";
import { CarouselItem } from "./CarouselItem";

interface IProps {
    className?: string;
    speed?: number;
    spacing?: number;
}

interface IAnimationSettings {
    speed: number;
    spacing: number;
}

export const AnimationSettingsContext = createContext<IAnimationSettings>({
    speed: 5,
    spacing: 8,
});

export const Carousel: FunctionComponent<IProps> = ({
    className,
    spacing = 8,
    speed = 5,
}) => {
    const controls = useAnimation();

    useEffect(() => {
        const startAnimation = () => {
            controls.start({
                x: ["0%", "-50%"],
                transition: {
                    x: {
                        duration: partners.length * speed,
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
        <AnimationSettingsContext.Provider value={{ spacing, speed }}>
            <div
                className={`${className} absolute h-20 max-w-screen-2xl overflow-hidden py-5`}
            >
                <div className={"flex h-full w-max"}>
                    <motion.div
                        className={"inline-block h-full"}
                        animate={controls}
                    >
                        {[...partners, ...partners].map((logo, index) => {
                            return (
                                <CarouselItem
                                    key={index}
                                    logoPath={logo.path}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </AnimationSettingsContext.Provider>
    );
};
