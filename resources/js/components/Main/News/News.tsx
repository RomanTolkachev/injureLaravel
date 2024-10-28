import { FunctionComponent, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { HeaderNews } from "./HeaderNews";
import { useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../../../services/hooks/typedUseSelector";
import { requestNews } from "../../../services/actions/newsActions";
import useScrollToRef from "../../../services/hooks/useScrollToRef";
import { PreloaderComponent } from "../../utils/PreloaderComponent";
import { NewsList } from "./NewsList";


export const News: FunctionComponent = () => {
  const dispatch = useDispatch();
  const newsSource = useSelector(state => state.newsState.newsData);
  const currentPage = useSelector(state => state.newsState.currentPage);
  const lastPage =  useSelector(state => state.newsState.lastPage);
  const isRequestSent =  useSelector(state => state.newsState.newsRequestSent);
  const firstNewItemRef = useRef<HTMLLIElement>(null);



  useEffect( () => {
    if (!newsSource.length) {
        dispatch(requestNews(1));
    }
  }, [])

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(async () => {
    await dispatch(requestNews(currentPage + 1));
  },[currentPage])

  return (
    <div className="sm:white-bottom-mask mx-auto max-w-[1024px] px-5 py-10 max-lg:container sm:px-0 sm:py-14 md:py-20 lg:py-32">
      <HeaderNews />
      {newsSource.length === 0 && isRequestSent
          ? <div className={"h-[120px] p-8"}><PreloaderComponent /></div>
          : <NewsList newsSource={newsSource} ref={firstNewItemRef}/>
      }

      {currentPage < lastPage ? (
          <button onClick={handleClick}>далее</button>
      ) : <span>больше нету</span>}
    </div>
  );
};
