import { FunctionComponent, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ContainerIfNoBackground: FunctionComponent<IProps> = ({
  children,
}) => {
  return (
    <div className={"mx-auto mt-10 max-w-screen-md lg:mt-14"}>{children}</div>
  );
};
