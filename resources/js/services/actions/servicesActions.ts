import {AppThunk, IServiceItem} from "../utils/types";
import {fetchServices} from "../utils/api";

export const GET_SERVICES_SUCCESS:"GET_SERVICES_SUCCESS" = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILED: "GET_SERVICES_FAILED" = "GET_SERVICES_FAILED"

export const handleGetServicesSuccess = (parsed: IServiceItem[]) => {
    return {
        type: GET_SERVICES_SUCCESS,
        payload: parsed
    }
}

export const handleGetServicesFailed = () => {
    return {
        type: GET_SERVICES_FAILED,
    }
}

export const getServices = (): AppThunk => {
return function (dispatch) {
    fetchServices()
        .then(res => dispatch(handleGetServicesSuccess(res)))
        .catch(() => dispatch(handleGetServicesFailed()))
    }
}
