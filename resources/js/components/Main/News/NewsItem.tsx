import { FunctionComponent } from "react";
import { Date } from "./Date";
import { ContentNews } from "./ContentNews";
import { INews } from "../../../services/utils/types";

export const NewsItem: FunctionComponent<{ news: INews }> = ({ news }) => {
  return (
    <article className="flex w-full flex-col py-3 sm:flex-row md:py-4 lg:py-6 [&>*]:basis-1/2">
      <div className="hidden sm:block">
        <Date date={news.date} />
      </div>
      <ContentNews
        date={news.date}
        header={news.header}
        preview={news.preview}
      />
    </article>
  );
};
