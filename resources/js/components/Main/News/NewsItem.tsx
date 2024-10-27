import { FunctionComponent } from "react";
import { ContentNews } from "./ContentNews";
import { INews } from "../../../services/utils/newsType";
import { DateComponent } from "./DateComponent";

export const NewsItem: FunctionComponent<{ news: INews }> = ({ news }) => {
  return (
    <article className="flex w-full flex-col py-3 sm:flex-row md:py-4 lg:py-6 [&>*]:basis-1/2">
      <div className="hidden sm:block">
        <DateComponent date={news.created_at} />
      </div>
      <ContentNews
        date={news.created_at}
        header={news.title}
        preview={news.header}
      />
    </article>
  );
};
