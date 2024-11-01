import { motion, useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import { ButtonToVideo } from "../buttons/ButtonToVideo";
import {
    useDispatchTyped as useDispatch,
    useSelectorTyped as useSelector,
} from "../../services/hooks/typedUseSelector";
import { setFemidaAnimated } from "../../services/actions/animationActions";
import { Carousel } from "./carousel/Carousel";
const femidaVariants = {
    start: {
        opacity: 0,
        x: "10%",
    },
    end: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.85,
            ease: "easeOut",
        },
    },
};

export const Hero: FunctionComponent = () => {
    const controls = useAnimation();
    const dispatch = useDispatch();
    const shouldAnimate = useSelector(
        (state) => state.animationState.shouldFemidaAnimate,
    );

    useEffect(() => {
        return () => {
            dispatch(setFemidaAnimated());
        };
    }, [shouldAnimate]);

    return (
        <div className="my-gradient relative h-[calc(100svh-79px)] min-h-[600px] w-full overflow-hidden">
            <div className="relative mx-auto h-full w-full max-w-[1540px]">
                <div className="relative mx-auto flex h-full w-full min-w-fit max-w-[1280px] justify-center md:justify-end md:pr-5 lg:pr-20">
                    {shouldAnimate ? (
                        <motion.img
                            key="femida"
                            variants={femidaVariants}
                            animate={controls}
                            src="/webp/main-no-bg.webp"
                            alt="статуя"
                            className="h-full min-w-fit object-contain opacity-0"
                            onLoad={() => {
                                controls
                                    .start("start")
                                    .then(() => controls.start("end"));
                            }}
                        />
                    ) : (
                        <img
                            src="/webp/main-no-bg.webp"
                            alt="статуя"
                            className="h-full min-w-fit object-contain"
                        />
                    )}
                    <div className="hero-mask absolute left-0 z-[1] h-[calc(100svh-79px)] min-h-[600px] w-full opacity-60 sm:hidden"></div>
                </div>
                <div className="absolute top-0 z-[2] flex h-full items-center justify-center max-sm:right-1/2 max-sm:translate-x-1/2 sm:pl-4 md:pl-12 xl:pl-20">
                    <div className="flex h-full max-w-[400px] flex-col justify-center tracking-tight max-sm:pb-20 max-sm:pt-16 md:max-w-[480px] xl:max-w-[680px]">
                        <h1 className="mb-4 px-4 text-hero-main-small-mobile font-black uppercase text-white max-sm:mt-auto sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl">
                            нам
                            <br /> доверяют
                            <br /> по праву
                        </h1>
                        <p className=" mb-6 sm:mb-5 px-4 text-hero-legend text-white sm:px-0">
                            Мы - юридическая компания «In Jure» ("Ин Юре"),
                            специализирующаяся на правовом сопровождении бизнеса
                            и на оказании помощи физическим лицам во всех
                            регионах России.
                        </p>
                        <div className="w-fit max-sm:mx-auto max-sm:mt-auto max-sm:w-full">
                            <ButtonToVideo>смотреть видео</ButtonToVideo>
                        </div>
                    </div>
                </div>
                <div className={"z-9 sm:px-4 md:px-12 xl:px-20 absolute bottom-0 right-1/2 w-full max-w-screen-2xl translate-x-1/2"}>
                    <Carousel
                        className={" "}
                    />
                </div>
            </div>
        </div>
    );
};
