import { FunctionComponent } from "react";
import { Date } from "./Date";

interface IContentNewsProps {
  header: string;
  preview: string;
  date: Date;
}

export const ContentNews: FunctionComponent<IContentNewsProps> = ({
  header,
  preview,
  date,
}) => {
  return (
    <div className="first-letter:uppercase">
      <h3 className="font-semibold text-my-main-blue sm:mb-3 sm:text-sm md:text-xl">
        {header}
      </h3>
      <div className="mb-2 sm:hidden">
        <Date date={date} />
      </div>
      <span className="text-news-preview text-my-gray sm:text-base">
        {preview}
      </span>
    </div>
  );
};
