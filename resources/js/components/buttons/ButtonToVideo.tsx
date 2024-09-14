import { FunctionComponent, ReactNode } from "react";

interface IButtonToVideoProps {
  children: ReactNode;
}

export const ButtonToVideo: FunctionComponent<IButtonToVideoProps> = ({
  children,
}) => {
  return (
    <button className="video-button sm:video-button-wide block h-20 w-full px-10 text-2xl font-bold text-my-blue-light">
      {children}
    </button>
  );
};
