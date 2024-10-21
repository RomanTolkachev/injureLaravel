import {TCallUsModal} from "../utils/types";

export const SET_CALL_US_MODAL_OPEN: "SET_CALL_US_MODAL_OPEN" = 'SET_CALL_US_MODAL_OPEN';
export const SET_CALL_US_MODAL_CLOSED: "SET_CALL_US_MODAL_CLOSED" = 'SET_CALL_US_MODAL_CLOSED';

export const closeCallUsModal = ():TCallUsModal => {
    return  {
        type: SET_CALL_US_MODAL_CLOSED
    }
}

export const openCallUsModal = ():TCallUsModal => {
    window.history.pushState(null,"", window.location.href) // эта модалка открывается только по dispatch. чтобы при клике "назад не происходила навигация, мы пушим стейт
    return  {
        type: SET_CALL_US_MODAL_OPEN
    }
}
