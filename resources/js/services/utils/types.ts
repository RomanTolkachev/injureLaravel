import { store } from "../../index";
import {GET_SERVICES_FAILED, GET_SERVICES_SUCCESS} from "../actions/servicesActions";
import {Action, ThunkAction} from "@reduxjs/toolkit";
import {IRootState} from "../reducers/root-reducer";

export interface IMenuItem {
  path: string;
  text: string;
}

export interface IEmployee {
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
    type: typeof GET_SERVICES_SUCCESS
    payload: IServiceItem[]
}

export interface IServicesFetchFailed {
    type: typeof GET_SERVICES_FAILED
}

export type TServicesFetch = IServicesFetchSuccess | IServicesFetchFailed

export type AppThunk = ThunkAction<ReturnType<any>, IRootState, unknown, Action>;
export type TAppDispatch = typeof store.dispatch;
