import React, { FunctionComponent } from "react";
import {
    useDispatchTyped as useDispatch,
    useSelectorTyped as useSelector,
} from "../../services/hooks/typedUseSelector";
import { Params, useParams } from "react-router-dom";
import { getServices } from "../../services/actions/servicesActions";
import { INews } from "../../services/utils/newsType";
import { ImgCustom } from "../utils/ImgCustom";
import { PreloaderComponent } from "../utils/PreloaderComponent";

interface IProps {
    className?: string;
}

let newsItem: INews | null;

export const NewsLongRead: FunctionComponent<IProps> = ({ className }) => {
    console.log("рендер ньюс модал");
    const dispatch = useDispatch();
    const { newsId }: Params<string> = useParams();
    const news = useSelector((state) => state.newsState.newsData);
    if (!news) {
        // dispatch(getServices())
    } else {
        newsItem = news.filter((item) => item.id === newsId)[0];
    }
    return news && newsItem ? (
        <article className={`${className} flex h-fit w-full flex-col px-8`}>
            <div className="h-fit">
                <h4
                    className={
                        "mb-4 w-full text-center text-xl font-bold sm:mb-8 sm:text-3xl"
                    }
                >
                    {newsItem.title}
                </h4>
                {/*картинка*/}
                {/*<div className={"relative mb-4 aspect-[2.5] w-full sm:mb-8"}>*/}
                {/*<ImgCustom*/}
                {/*    src={article[0].image}*/}
                {/*    className={"absolute h-full w-full object-cover"}*/}
                {/*/>*/}
                {/*    <div*/}
                {/*        className={"absolute top-0 h-full w-full bg-[#000D8199] opacity-60"}*/}
                {/*    ></div>*/}
                {/*</div>*/}
                <div
                    // prettier-ignore
                    className="font-Georgia
                        h-fit pb-20
                        [&_h5]:text-center [&_h5]:font-semibold [&_h5]:first-letter:capitalize
                        [&_h2]:font-semibold [&_h2]:first-letter:capitalize [&_h2]:text-center
                        [&_p]:indent-8 [&_p]:mb-2
                        [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4
                        [&_li]:first-letter:capitalize [&_ul]:space-y-2
                        [&_h6]:inline-block"
                    dangerouslySetInnerHTML={{ __html: newsItem.long_read }}
                ></div>
            </div>
        </article>
    ) : (
        <PreloaderComponent
            className={"h-[100px] w-full py-5 sm:mb-6 lg:mb-10"}
        />
    );
};
