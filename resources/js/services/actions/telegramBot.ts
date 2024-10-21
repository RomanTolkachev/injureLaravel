import {AppThunk, TAppDispatch} from "../utils/types";
import {sendRequest} from "../utils/api";
import {IInputs} from "../../components/utils/Form";

export const MESSAGE_SENT: "MESSAGE_SENT" = "MESSAGE_SENT";
export const MESSAGE_SENT_SUCCESS: "MESSAGE_SENT_SUCCESS" = "MESSAGE_SENT_SUCCESS";
export const MESSAGE_FAILED: "MESSAGE_FAILED" = "MESSAGE_FAILED";
export const MESSAGE_SENT_PROCESS_OVER: "MESSAGE_SENT_PROCESS_OVER" = "MESSAGE_SENT_PROCESS_OVER";

export const sendCallUsRequest = (contactsData: IInputs): AppThunk => {
    return dispatch => {
        dispatch({type: MESSAGE_SENT})
        return sendRequest(contactsData)
            .then((res: any) => res.result!.message_id
                ? dispatch({type: MESSAGE_SENT_SUCCESS})
                : dispatch({type: MESSAGE_FAILED, payload: res})
            )
            .catch(error => dispatch({type: MESSAGE_FAILED, payload: error}))
    }
}

export const sendMessageProcessOver = ():AppThunk => {
    return (dispatch) => {
        dispatch({type: MESSAGE_SENT_PROCESS_OVER})
    }
}


