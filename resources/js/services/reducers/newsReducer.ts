import { INews } from "../utils/newsType";
import {
    PUSH_NEWS,
    SET_NEWS_REQUEST_ERROR,
    SET_NEWS_REQUEST_SENT,
    SET_NEWS_REQUEST_SUCCESS
} from "../actions/newsActions";
import { INewsActions } from "../utils/types";

export interface INewsReducer {
    newsRequestSent: boolean
    newsRequestSentSuccess: boolean
    newsRequestError: boolean
    newsData: Array<INews> | []
}

const initialState: INewsReducer = {
    newsRequestSent: false,
    newsRequestSentSuccess: false,
    newsRequestError: false,
    newsData: []
}

export const newsReducer = (state: INewsReducer = initialState, action: INewsActions) => {
    switch (action.type) {
        case SET_NEWS_REQUEST_SENT: {
            return {
                ...state,
                newsRequestSent: true,
            }
        };
        case SET_NEWS_REQUEST_SUCCESS: {
            return {
                ...state,
                newsRequestSentSuccess: true,
            }
        }
        case PUSH_NEWS: {
            return {
                ...state,
                newsData: [...state.newsData, ...action.payload]
            }
        };
        case SET_NEWS_REQUEST_ERROR: {
            return {
                ...state,
                newsRequestError: true,
            }
        };
        default: return {
            ...state
        }
    }
}
