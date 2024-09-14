import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { ButtonToVideo } from "../buttons/ButtonToVideo";
const femidaVariants = {
  start: {
    opacity: 0,
    x: "10%",
  },
  end: (loaded: boolean) => ({
    opacity: loaded ? 1 : 0,
    x: loaded ? 0 : "10%",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  }),
};

export const Hero: FunctionComponent = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="my-gradient relative h-[calc(100svh-79px)] min-h-[600px] w-full overflow-hidden">
      <div className="mx-auto h-full w-full max-w-[1540px]">
        <div className="relative mx-auto flex h-full w-full min-w-fit max-w-[1280px] justify-center md:justify-end md:pr-5 lg:pr-20">
          <motion.img
            key="femida"
            variants={femidaVariants}
            custom={() => loaded}
            src="/webp/main-no-bg.webp"
            alt="статуя"
            className="h-full min-w-fit object-contain"
            onLoad={() => setLoaded(true)}
          />
          <div className="hero-mask absolute left-0 z-[1] h-[calc(100svh-79px)] min-h-[600px] w-full opacity-60 sm:hidden"></div>
        </div>
        <div className="absolute top-0 z-[2] flex h-full items-center justify-center max-sm:right-1/2 max-sm:translate-x-1/2 sm:pl-4 md:pl-6 xl:pl-20">
          <div className="flex h-full max-w-[400px] flex-col justify-center tracking-tight max-sm:py-16 md:max-w-[480px] xl:max-w-[680px]">
            <h1 className="mb-4 px-4 text-hero-main-small-mobile font-black uppercase text-white max-sm:mt-auto sm:px-0 sm:text-hero-main">
              нам
              <br /> доверяют
              <br /> по праву
            </h1>
            <p className="mb-10 px-4 text-hero-legend text-white sm:px-0">
              Мы - юридическая компания «In Jure» ("Ин Юре"), специализирующаяся
              на правовом сопровождении бизнеса и на оказании помощи физическим
              лицам во всех регионах России.
            </p>
            <div className="w-fit max-sm:mx-auto max-sm:mt-auto max-sm:w-full">
              <ButtonToVideo>смотреть видео</ButtonToVideo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
