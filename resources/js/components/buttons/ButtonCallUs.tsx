import { FunctionComponent, ReactNode } from "react";

interface IButtonCallUs {
  children: ReactNode;
  color: 'whiteColor' | 'blueColor'
}

const white: string = "video-button block h-20 w-full px-10 text-2xl font-bold rounded-3xl text-my-blue-light border-white bg-white"
const blue: string = "video-button block h-20 w-full px-10 text-2xl font-bold rounded-3xl text-my-white border-white bg-my-blue-light"

export const ButtonCallUs: FunctionComponent<IButtonCallUs> = ({
  children,
  color
}) => {
  return (
    <button className={color==="whiteColor" ? white : blue}>
      {children}
    </button>
  );
};
