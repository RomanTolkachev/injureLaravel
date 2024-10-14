import {MESSAGE_FAILED, MESSAGE_SENT, MESSAGE_SENT_SUCCESS} from "../actions/telegramBot";
import {TTelegramBotActions} from "../utils/types";

export interface ITGBOTReducer {
    messageSent: boolean
    messageSentSuccess: boolean
    messageSentFail: boolean
    error?: any
}
export const initialState = {
    messageSent: false,
    messageSentSuccess: false,
    messageSentFail: false,
    error: null,
};

export const telegramBotState = (state: ITGBOTReducer = initialState, action: TTelegramBotActions): ITGBOTReducer => {
    switch (action.type) {
        case MESSAGE_SENT: {
            return {
                ...initialState,
                messageSent: true,
            }
        }
        case MESSAGE_SENT_SUCCESS: {
            return {
                ...state,
                messageSentSuccess: true,
                messageSent: false,
            }
        }
        case MESSAGE_FAILED: {
            return {
                ...state,
                messageSentSuccess: true,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}