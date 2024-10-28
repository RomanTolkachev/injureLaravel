import { FunctionComponent, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { HeaderNews } from "./HeaderNews";
import {
    useDispatchTyped as useDispatch,
    useSelectorTyped as useSelector
} from "../../../services/hooks/typedUseSelector";
import { requestNews } from "../../../services/actions/newsActions";
import { PreloaderComponent } from "../../utils/PreloaderComponent";
import { NewsList } from "./NewsList";
import { motion } from "framer-motion";
import { PreloaderAnimatedButton } from "../../buttons/PreloaderAnimatedButton";

const buttonVariants = {
    animate: {
        scale: [1, 1.15, 1],
        color: ["#000000", "#808080", "#000000"],
        transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            repeatDelay: 2 }
    }
};


export const News: FunctionComponent = () => {
    const dispatch = useDispatch();
    const newsSource = useSelector(state => state.newsState.newsData);
    const currentPage = useSelector(state => state.newsState.currentPage);
    const lastPage = useSelector(state => state.newsState.lastPage);
    const isRequestSent = useSelector(state => state.newsState.newsRequestSent);
    const firstNewItemRef = useRef<HTMLLIElement>(null);


    useEffect(() => {
        if (!newsSource.length) {
            dispatch(requestNews(1));
        }
    }, []);

    const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        dispatch(requestNews(currentPage + 1));
    }, [currentPage]);

    return (
        <div
            className="sm:white-bottom-mask mx-auto max-w-[1024px] px-5 py-10 max-lg:container sm:px-0 sm:py-14 md:py-20 lg:py-32">
            <HeaderNews />
            {newsSource.length === 0 && isRequestSent
                ? <PreloaderComponent className="h-[120px] py-8" />
                : <NewsList newsSource={newsSource} ref={firstNewItemRef} />
            }
            <PreloaderAnimatedButton
                className="w-full"
                isActive={currentPage < lastPage}
                isPreloader={isRequestSent}
                activeText="еще новости"
                blockedText="это все новости"
                clickHandler={handleClick} />

            {/*<div className="h-[120px] w-full flex justify-center items-center !text-[#808080] font-black">*/}
            {/*    {currentPage < lastPage*/}
            {/*        ? (isRequestSent*/}
            {/*            ? <PreloaderComponent className="h-[80px]" />*/}
            {/*            : <motion.button onClick={handleClick} animate={"animate"} variants={buttonVariants} className="px-4 py-2">еще новости</motion.button>)*/}
            {/*        : <span className="px-4 py-2 text-my-deep-gray">это все новости</span>}*/}
            {/*</div>*/}
        </div>
    );
};
