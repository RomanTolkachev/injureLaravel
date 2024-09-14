import { FunctionComponent } from "react";

interface IBurgerButtonProps {
  onClickHandler?: any;
  burgerOpen: boolean;
  className?: string;
}

export const BurgerButton: FunctionComponent<IBurgerButtonProps> = ({
  onClickHandler,
  burgerOpen,
  className,
}) => {
  return (
    <button
      className={`${className} overflow-hidden p-[10px] text-center`}
      onClick={onClickHandler}
    >
      <span
        style={burgerOpen ? { opacity: 0 } : undefined}
        className="absolute left-[10px] top-[25px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { transform: "rotate(45deg)" } : undefined}
        className="absolute left-[10px] top-[39px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { transform: "rotate(-45deg)" } : undefined}
        className="absolute left-[10px] top-[39px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
      <span
        style={burgerOpen ? { opacity: 0 } : undefined}
        className="absolute left-[10px] top-[53px] h-[2.5px] w-[42px] bg-white duration-500"
      ></span>
    </button>
  );
};
