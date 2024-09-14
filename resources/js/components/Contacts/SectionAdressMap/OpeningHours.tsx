import { FunctionComponent } from "react";

interface IOpeningHours {
  className?: string;
  workDays?: string;
  workTime?: string;
}

export const OpeningHours: FunctionComponent<IOpeningHours> = ({
  className,
  workDays = "Понедельник - Пятница",
  workTime = "09:00 - 19:00",
}) => {
  return (
    <div className={`w-full first-letter:capitalize ${className}`}>
      <h5 className="text-news-preview text-my-gray sm:text-sm sm:font-bold sm:text-my-gray-header">
        режим работы
      </h5>
      <div className="flex w-full gap-6">
        <span className="text-xl font-normal">{workDays}</span>
        <span className="text-nowrap text-xl font-normal">{workTime}</span>
      </div>
    </div>
  );
};
