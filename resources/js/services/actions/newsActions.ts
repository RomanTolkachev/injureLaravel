import { getFourNews } from "../utils/api";
import { AppThunk, INews, INewsActions } from "../utils/types";

export const SET_NEWS_REQUEST_SENT:"SET_NEWS_REQUEST_SENT" = "SET_NEWS_REQUEST_SENT";
export const SET_NEWS_REQUEST_SUCCESS: "SET_NEWS_REQUEST_SENT" = "SET_NEWS_REQUEST_SENT";
export const SET_NEWS_REQUEST_ERROR: "SET_NEWS_REQUEST_ERROR" = "SET_NEWS_REQUEST_ERROR";
export const PUSH_NEWS: "PUSH_NEWS" = "PUSH_NEWS";

export const setNewsRequestSent = (): INewsActions => {
    return {
        type: SET_NEWS_REQUEST_SENT
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

export const pushNews = (fetchedData: Array<INews>): INewsActions => {
    return {
        type: PUSH_NEWS,
        payload: fetchedData
    }
}

export const requestNews = (page: number): AppThunk => {
    return dispatch => {
        return getFourNews(page)
            .then((res: any) => dispatch(pushNews(res.data)))
            .catch(err => dispatch(setNewsRequestFailed()))
    }
}
