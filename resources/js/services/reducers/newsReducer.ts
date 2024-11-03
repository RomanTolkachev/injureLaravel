import { INews } from "../utils/newsType";
import {
    PUSH_NEWS,
    SET_NEWS_REQUEST_ERROR,
    SET_NEWS_REQUEST_OVER,
    SET_NEWS_REQUEST_SENT,
    SET_NEWS_REQUEST_SUCCESS,
} from "../actions/newsActions";
import { INewsActions } from "../utils/types";

export interface INewsReducer {
    newsRequestSent: boolean;
    newsRequestSentSuccess: boolean;
    newsRequestError: boolean;
    newsError: string | null;
    newsData: Array<INews> | [];
    currentPage: number;
    lastPage: number;
}

const initialState: INewsReducer = {
    newsRequestSent: false,
    newsRequestSentSuccess: false,
    newsRequestError: false,
    newsData: [],
    newsError: null,
    currentPage: 1,
    lastPage: 0,
};

export const newsReducer = (
    state: INewsReducer = initialState,
    action: INewsActions,
) => {
    switch (action.type) {
        case SET_NEWS_REQUEST_SENT: {
            return {
                ...state,
                newsRequestSent: true,
            };
        }
        case SET_NEWS_REQUEST_OVER: {
            return {
                ...state,
                newsRequestSent: false,
            };
        }
        case SET_NEWS_REQUEST_SUCCESS: {
            return {
                ...state,
                newsRequestSentSuccess: true,
            };
        }
        case PUSH_NEWS: {
            const combinedNews = [
                ...state.newsData,
                ...action.payload.fetchedNews,
            ];
            const filteredNews: INews[] | [] = combinedNews.reduce(
                (acc, current) => {
                    let x = acc.find((item: INews) => item.id === current.id);
                    if (!x) {
                        return [...acc, current];
                    }
                    return acc;
                },
                [] as INews[],
            );
            const sortedNews = filteredNews.sort(
                (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime(),
            );
            return {
                ...state,
                newsData: sortedNews,
                currentPage: action.payload.currentPage,
                lastPage: action.payload.lastPage,
            };
        }
        case SET_NEWS_REQUEST_ERROR: {
            return {
                ...state,
                newsRequestError: true,
                newsError: action.payload.error,
            };
        }
        default:
            return {
                ...state,
            };
    }
};
