import { FunctionComponent, useEffect } from "react";
import { news } from "../../../services/utils/news";
import { HeaderNews } from "./HeaderNews";
import { NewsItem } from "./NewsItem";
import { v7 as uuid } from "uuid";
import { useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../../../services/hooks/typedUseSelector";
import {  requestNews } from "../../../services/actions/newsActions";

export const News: FunctionComponent = () => {
  const newsWithId = news.map((item) => {
    return { ...item, id: uuid() };
  });
  const dispatch = useDispatch();
  const newsSource = useSelector(state => state.newsState.newsData)

  useEffect(() => {
      dispatch(requestNews(1))
  }, [])
  return (
    <div className="sm:white-bottom-mask mx-auto max-w-[1024px] px-5 py-10 max-lg:container sm:px-0 sm:py-14 md:py-20 lg:py-32">
      <HeaderNews />
      <ul className="[&>li]:border-b [&>li]:border-b-my-main-blue">
        {/*{newsWithId.slice(0, 3).map((item) => {*/}
        {/*  return (*/}
        {/*    <li key={item.id}>*/}
        {/*      <NewsItem news={item} />*/}
        {/*    </li>*/}
        {/*  );*/}
        {/*})}*/}
          {newsSource && newsSource.map((item) => {
              return (
                  <li key={item.id}>
                      <NewsItem news={item} />
                  </li>
              );
          })}
      </ul>
    </div>
  );
};
