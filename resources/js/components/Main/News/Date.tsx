import { FunctionComponent } from "react";

interface IDateHeaderProps {
  date: Date;
}

export const Date: FunctionComponent<IDateHeaderProps> = ({ date }) => {
  return (
    <span className="font-base text-xs font-black tracking-wide text-my-deep-light lg:text-sm">
      {date
        .toLocaleString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .replace("г.", "года")}
    </span>
  );
};
