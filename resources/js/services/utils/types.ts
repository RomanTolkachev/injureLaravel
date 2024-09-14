import { store } from "../../index";

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

export type TAppDispatch = typeof store.dispatch;
