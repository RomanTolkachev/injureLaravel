import { store } from "../../index";
import {
    GET_SERVICES_FAILED,
    GET_SERVICES_SUCCESS,
} from "../actions/servicesActions";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../reducers/root-reducer";
import {
    MESSAGE_FAILED,
    MESSAGE_SENT,
    MESSAGE_SENT_PROCESS_OVER,
    MESSAGE_SENT_SUCCESS,
} from "../actions/telegramBot";
import {
    SET_CALL_US_MODAL_CLOSED,
    SET_CALL_US_MODAL_OPEN,
} from "../actions/callUsActions";

export interface IMenuItem {
    path: string;
    text: string;
}

export interface IEmployee {
    role?: string;
    photoCallUs: string;
    photoTeam: string;
    colourMain: string;
    colourAccent: string;
    experience: string;
    bio: string;
    legal?: {
        number: string;
        from: string;
        legalBody: string;
    };
}

export interface INews {
    date: Date;
    header: string;
    preview: string;
    text: string;
    id?: string;
}

export interface IServiceItem {
    title: string;
    type: string;
    image: string;
    id: string;
    content: string;
    size?: string;
}

export interface IServicesFetchSuccess {
    type: typeof GET_SERVICES_SUCCESS;
    payload: IServiceItem[];
}

export interface IServicesFetchFailed {
    type: typeof GET_SERVICES_FAILED;
}

export type TServicesFetch = IServicesFetchSuccess | IServicesFetchFailed;

export type TTelegramBotActions =
    | ITelegramBotMessageSent
    | ITelegramBotMessageSuccess
    | ITelegramBotMessageFailed
    | ITelegramBotMessageSentProcessOver;

export interface ITelegramBotMessageSent {
    type: typeof MESSAGE_SENT;
}

export interface ITelegramBotMessageSentProcessOver {
    type: typeof MESSAGE_SENT_PROCESS_OVER;
}

export interface ITelegramBotMessageSuccess {
    type: typeof MESSAGE_SENT_SUCCESS;
}

export interface ITelegramBotMessageFailed {
    type: typeof MESSAGE_FAILED;
    payload: any;
}

export type TCallUsModal = ISetCallUsModalOpen | ISetCallUsModalClosed;

export interface ISetCallUsModalOpen {
    type: typeof SET_CALL_US_MODAL_OPEN;
}

export interface ISetCallUsModalClosed {
    type: typeof SET_CALL_US_MODAL_CLOSED;
}

export type AppThunk = ThunkAction<
    ReturnType<any>,
    IRootState,
    unknown,
    Action
>;
export type TAppDispatch = typeof store.dispatch;
