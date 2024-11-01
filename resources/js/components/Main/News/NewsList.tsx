import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { NewsItem } from "./NewsItem";
import { INews } from "../../../services/utils/newsType";
import useScrollToRef from "../../../services/hooks/useScrollToRef";
import { Link } from "react-router-dom";

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
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        prevNewsCountRef.current = newsSource.length;
    }, [newsSource]);

    useEffect(() => {
        if (mounted) {
            scrollToRef(ref).then(() => controls.start("end"))
        } else {
            setMounted(true)
        }
    }, [newsSource, mounted])


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
                        <Link to={`${item.id}`} state={{ background: location }} onClick={() => console.log(`${item.id}`)}>
                            <NewsItem news={item} />
                        </Link>
                    </motion.li>
                );
            })}
        </ul>
    );
});
