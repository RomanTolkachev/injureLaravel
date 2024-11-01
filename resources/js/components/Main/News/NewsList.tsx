import React, { forwardRef, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { NewsItem } from "./NewsItem";
import { INews } from "../../../services/utils/newsType";
import useScrollToRef from "../../../services/hooks/useScrollToRef";

interface IProps {
    newsSource: Array<INews>
}

const listVariants = {
    start: { opacity: 0 },
    end: { opacity: 1 },
};

export const NewsList= forwardRef<HTMLLIElement, IProps>(({newsSource}, ref) => {
    const prevNewsCountRef = useRef(newsSource.length);
    const scrollToRef = useScrollToRef()
    const controls = useAnimation();

    useEffect(() => {
        prevNewsCountRef.current = newsSource.length;
    }, [newsSource]);

    useEffect(() => {
        scrollToRef(ref).then(() => controls.start("end"))
    }, [newsSource])


    return (
        <ul key={11} className="[&>li]:border-b [&>li]:border-b-my-main-blue">
            {newsSource && newsSource.map((item, i) => {
                let delay = i % 4; // рассчитывает значения делэя для новостей, которые пришли с сервера
                const isFirstNewItem = i === newsSource.length - (newsSource.length - prevNewsCountRef.current);
                return (
                    <motion.li
                        variants={listVariants}
                        initial="start"
                        animate={controls}
                        transition={{ delay: delay * 0.4 }}
                        key={item.id}
                        ref={isFirstNewItem ? ref : null}
                    >
                        <NewsItem news={item} />
                    </motion.li>
                );
            })}
        </ul>
    );
});
