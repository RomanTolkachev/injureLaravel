import { FunctionComponent, ReactNode } from "react";

interface IButtonHeader {
  children: ReactNode;
}

export const ButtonHeader: FunctionComponent<IButtonHeader> = ({
  children,
}) => {
  return <span className="nav text-nowrap">{children}</span>;
};
