import {SET_CALL_US_MODAL_CLOSED, SET_CALL_US_MODAL_OPEN} from "../actions/callUsActions";
import {TCallUsModal} from "../utils/types";

export interface ICallUsModal {
    isCallUsModalOpen: boolean
}

const initialState = {
    isCallUsModalOpen: false
}

export const callUsModalState = (state: ICallUsModal = initialState, action: TCallUsModal) => {
    switch (action.type) {
        case SET_CALL_US_MODAL_OPEN: {
            return {
                ...state,
                isCallUsModalOpen: true
            }
        }        case SET_CALL_US_MODAL_CLOSED: {
            return {
                ...state,
                isCallUsModalOpen: false
            }
        }
        default: {
            return state
        }
    }
}
