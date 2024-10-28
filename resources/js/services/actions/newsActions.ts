import { getFourNews } from "../utils/api";
import { AppThunk, INewsActions } from "../utils/types";
import { INews } from "../utils/newsType";

export const SET_NEWS_REQUEST_SENT:"SET_NEWS_REQUEST_SENT" = "SET_NEWS_REQUEST_SENT";
export const SET_NEWS_REQUEST_SUCCESS: "SET_NEWS_REQUEST_SENT" = "SET_NEWS_REQUEST_SENT";
export const SET_NEWS_REQUEST_ERROR: "SET_NEWS_REQUEST_ERROR" = "SET_NEWS_REQUEST_ERROR";
export const PUSH_NEWS: "PUSH_NEWS" = "PUSH_NEWS";
export const SET_NEWS_REQUEST_OVER: "SET_NEWS_REQUEST_OVER" = "SET_NEWS_REQUEST_OVER";

export const setNewsRequestSent = (): INewsActions => {
    return {
        type: SET_NEWS_REQUEST_SENT
    }
}

export const setNewsRequestOver = (): INewsActions => {
    return {
        type: SET_NEWS_REQUEST_OVER
    }
}

export const setNewsRequestSuccess = (): INewsActions => {
    return {
        type: SET_NEWS_REQUEST_SUCCESS
    }
}

export const setNewsRequestFailed = (): INewsActions => {
    return {
        type: SET_NEWS_REQUEST_ERROR
    }
}

export const pushNews = (res:any): INewsActions => {
    return {
        type: PUSH_NEWS,
        payload: {
            fetchedNews: res.data,
            currentPage: res.current_page,
            lastPage: res.last_page
        }
    }
}

export const requestNews = (page: number): AppThunk => {
    return dispatch => {
            dispatch(setNewsRequestSent());
            getFourNews(page)
            .then((res: any) => dispatch(pushNews(res)))
            .catch(err => dispatch(setNewsRequestFailed()))
            .finally(() => dispatch(setNewsRequestOver()))
    }
}
