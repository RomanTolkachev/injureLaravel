import {IServiceItem, TServicesFetch} from "../utils/types";
import {GET_SERVICES_FAILED, GET_SERVICES_SUCCESS} from "../actions/servicesActions";

export interface IServicesReducer {
    servicesData: null | IServiceItem[]
    error: null | string
}

const initialState = {
    servicesData: null,
    error: null
}

export const servicesState = (state: IServicesReducer = initialState, action: TServicesFetch):IServicesReducer => {
    switch (action.type) {
        case GET_SERVICES_SUCCESS: {
            return {
                ...state,
                servicesData: action.payload
            }
        }
        case GET_SERVICES_FAILED: {
            return {
                ...state,
                error: "данные не загружены"
            }
        }
        default: {
            return state
        }
    }
}
