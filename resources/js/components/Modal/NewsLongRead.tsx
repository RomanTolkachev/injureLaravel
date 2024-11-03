import React, { FunctionComponent } from "react";
import {
    useDispatchTyped as useDispatch,
    useSelectorTyped as useSelector,
} from "../../services/hooks/typedUseSelector";
import { Params, useParams } from "react-router-dom";
import { INews } from "../../services/utils/newsType";
import { ImgCustom } from "../utils/ImgCustom";
import { PreloaderComponent } from "../utils/PreloaderComponent";
import { requestNewsItem } from "../../services/actions/newsActions";
import { FailedResponseMessage } from "../Main/News/FailedResponseMessage";

interface IProps {
    className?: string;
}

let newsItem: INews | null = null;

export const NewsLongRead: FunctionComponent<IProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { newsId }: Params<string> = useParams();
    const news = useSelector((state) => state.newsState.newsData);
    const requestError = useSelector(
        (state) => state.newsState.newsRequestError,
    );
    const errorMessage = useSelector((state) => state.newsState.newsError);
    const newsRequestSent = useSelector(
        (state) => state.newsState.newsRequestSent,
    );

    if (news.length === 0) {
        newsItem = null;
    } else if (news.filter((item) => item.id === newsId).length === 0) {
        newsItem = null;
    } else {
        newsItem = news.filter((item) => item.id === newsId)[0];
    }

    if (!errorMessage && !newsRequestSent && !requestError && !newsItem) {
        dispatch(requestNewsItem(newsId!));
    }

    // return news && newsItem ? (
    //     <article className={`${className} flex h-fit w-full flex-col px-8`}>
    //         <div className="h-fit">
    //             <h4
    //                 className={
    //                     "mb-4 w-full text-center text-xl font-bold sm:mb-8 sm:text-3xl"
    //                 }
    //             >
    //                 {newsItem.title}
    //             </h4>
    //                                                 {/*картинка*/}
    //                                                 {/*<div className={"relative mb-4 aspect-[2.5] w-full sm:mb-8"}>*/}
    //                                                 {/*<ImgCustom*/}
    //                                                 {/*    src={article[0].image}*/}
    //                                                 {/*    className={"absolute h-full w-full object-cover"}*/}
    //                                                 {/*/>*/}
    //                                                 {/*    <div*/}
    //                                                 {/*        className={"absolute top-0 h-full w-full bg-[#000D8199] opacity-60"}*/}
    //                                                 {/*    ></div>*/}
    //                                                 {/*</div>*/}
    //             <div
    //                 // prettier-ignore-start
    //                 className="h-fit pb-20 font-Georgia [&_h2]:text-center [&_h2]:font-semibold [&_h2]:first-letter:capitalize [&_h5]:text-center [&_h5]:font-semibold [&_h5]:first-letter:capitalize [&_h6]:inline-block [&_li]:first-letter:capitalize [&_p]:mb-2 [&_p]:indent-8 [&_ul]:mb-4 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4"
    //                 dangerouslySetInnerHTML={{ __html: newsItem.long_read }}
    //                 // prettier-ignore-end
    //             ></div>
    //         </div>
    //     </article>
    // ) : errorMessage ? (
    //     <FailedResponseMessage errorMessage={errorMessage} />
    // ) : (
    //     <PreloaderComponent
    //         className={"h-[100px] w-full py-5 sm:mb-6 lg:mb-10"}
    //     />
    // );

    return newsRequestSent ? (
        <PreloaderComponent
            className={"h-[100px] w-full py-5 sm:mb-6 lg:mb-10"}
        />
    ) : news && newsItem ? (
        <article className={`${className} flex h-fit w-full flex-col px-8`}>
            <div className="h-fit">
                <h4
                    className={
                        "mb-4 w-full text-center text-xl font-bold sm:mb-8 sm:text-3xl"
                    }
                >
                    {newsItem.title}
                </h4>
                <div
                    // prettier-ignore-start
                    className="h-fit pb-20 font-Georgia [&_h2]:text-center [&_h2]:font-semibold [&_h2]:first-letter:capitalize [&_h5]:text-center [&_h5]:font-semibold [&_h5]:first-letter:capitalize [&_h6]:inline-block [&_li]:first-letter:capitalize [&_p]:mb-2 [&_p]:indent-8 [&_ul]:mb-4 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4"
                    dangerouslySetInnerHTML={{ __html: newsItem.long_read }}
                    // prettier-ignore-end
                ></div>
            </div>
        </article>
    ) : errorMessage ? (
        <FailedResponseMessage errorMessage={errorMessage} />
    ) : null;
};
