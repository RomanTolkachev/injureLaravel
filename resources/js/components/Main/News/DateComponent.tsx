import { FunctionComponent, useEffect } from "react";

interface IDateHeaderProps {
  date: string
}

export const DateComponent: FunctionComponent<IDateHeaderProps> = ({ date }) => {
    const parsedDate = new Date(date);
    const formattedDate = !isNaN(parsedDate.getTime())
        ? parsedDate.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).replace("г.", "года")
        : "Неверный формат даты";

    return (
        <span className="font-base text-xs font-black tracking-wide text-my-deep-light lg:text-sm">
      {formattedDate}
    </span>

    );
};
