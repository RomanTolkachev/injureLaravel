import { FunctionComponent, ReactNode } from "react";

interface IProps {
  className?: string;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

export const AboutBlock: FunctionComponent<IProps> = ({
  rightSide,
  className,
  leftSide,
}) => {
  return (
    <div className={`${className} mx-auto w-full max-w-screen-lg sm:px-16`}>
      <div
        className={
          "aspect-square w-full rounded-2xl bg-cyan-200 py-6 sm:aspect-[1.85] sm:p-8 md:p-12 lg:p-16"
        }
      >
        <div className={"flex h-full w-full flex-col sm:flex-row"}>
          <div
            className={
              "order-2 flex h-2/5 basis-1/2 flex-col justify-center sm:order-1 sm:h-full"
            }
          >
            {leftSide}
          </div>
          <div className={"order-1 h-3/5 basis-1/2 sm:order-2 sm:h-full"}>
            {rightSide}
          </div>
        </div>
      </div>
    </div>
  );
};
