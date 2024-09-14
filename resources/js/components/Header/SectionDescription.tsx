import { FunctionComponent, ReactNode } from "react";
import { BroadCrumbs } from "../utils/BroadCrumbs";

interface ISectionDescription {
  children?: ReactNode;
  header: string;
  BGImage: string;
  className?: string;
  imgPosition?: string;
}

export const SectionDescription: FunctionComponent<ISectionDescription> = ({
  header,
  BGImage,
  className,
  imgPosition,
}) => {
  return (
    <div
      className={`bg-cyan-[#1c3749] relative mx-auto aspect-[3] w-full text-my-white md:aspect-[5.7] ${className}`}
    >
      <div className={"absolute top-0 z-[2] h-full w-full"}>
        <img
          src={BGImage}
          alt="bg"
          className={`${imgPosition} h-full w-full object-cover`}
        />
        <div className="absolute top-0 z-[3] h-full w-full bg-my-blue-light opacity-30"></div>
      </div>
      <div className={"absolute top-0 z-[4]"}>
        <div className="h-full w-full md:p-5 lg:p-7 xl:p-10">
          <BroadCrumbs className={"hidden lg:block"} />
          <h2 className="pl-6 pt-6 text-3xl font-black first-letter:capitalize sm:text-4xl lg:pl-0 lg:pt-0 lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {header}
          </h2>
        </div>
      </div>
    </div>
  );
};
