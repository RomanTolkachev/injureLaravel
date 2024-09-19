import { FunctionComponent, ReactNode } from "react";

interface IProps {
  className?: string;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
  gridClass?: string
  cardClassName?: string
}

export const AboutBlock: FunctionComponent<IProps> = ({
  rightSide,
  className,
  leftSide,
  gridClass,
  cardClassName
}) => {
  return (
    <div className={`${className} mx-auto w-full max-w-screen-lg sm:px-16 max-sm:w-[390px]`}>
      <div
        className={
          `w-full h-fit rounded-2xl shadow-md bg-white ${cardClassName}`
        }
      >
        <div className={`grid h-full w-full grid-cols-1 sm:grid-cols-2 ${gridClass}`}>
          <div
            className={
              "order-2 flex flex-col justify-center items-center sm:order-1 sm:h-full"
            }
          >
            {leftSide}
          </div>
          <div className={"order-1 sm:order-2 sm:h-full flex items-center justify-center"}>
            {rightSide}
          </div>
        </div>
      </div>
    </div>
  );
};
