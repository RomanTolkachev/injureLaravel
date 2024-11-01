import { FunctionComponent } from "react";
import {useDispatchTyped as useDispatch, useSelectorTyped as useSelector} from "../../services/hooks/typedUseSelector";
import { Params, useParams } from "react-router-dom";
import { getServices } from "../../services/actions/servicesActions";

interface IProps {
    className?: string;
}

let newsItem;

export const NewsLongRead: FunctionComponent<IProps> = () => {
    console.log('рендер ньюс модал')
    // const dispatch = useDispatch()
    // const { newsId }: Params<string> = useParams();
    // const news = useSelector(state => state.newsState.newsData)
    // if (!news) {
    //     dispatch(getServices())
    // } else {
    //     newsItem = news.filter((item) => item.id === newsId);
    // }
    return (
        <div>
            я новость
        </div>
    );
};
