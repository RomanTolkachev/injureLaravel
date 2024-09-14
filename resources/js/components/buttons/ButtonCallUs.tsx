import { FunctionComponent, ReactNode } from "react";

interface IButtonCallUs {
  children: ReactNode;
}

export const ButtonCallUs: FunctionComponent<IButtonCallUs> = ({
  children,
}) => {
  return (
    <button className="video-button block h-20 w-full px-10 text-2xl font-bold text-my-blue-light">
      {children}
    </button>
  );
};
