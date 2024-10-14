import {IInputs} from "../../components/CallUs/CallUs";
import {AppThunk} from "../utils/types";
import {sendRequest} from "../utils/api";

export const MESSAGE_SENT: "MESSAGE_SENT" = "MESSAGE_SENT";
export const MESSAGE_SENT_SUCCESS: "MESSAGE_SENT_SUCCESS" = "MESSAGE_SENT_SUCCESS";
export const MESSAGE_FAILED: "MESSAGE_FAILED" = "MESSAGE_FAILED";

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
