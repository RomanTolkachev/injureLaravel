import { IMenuItem } from "../utils/types";

export interface IHeaderReducer {
  navList: Array<IMenuItem>;
}

const initialState: IHeaderReducer = {
  navList: [
    { path: "/", text: "главная" },
    {
      path: "/about",
      text: "о компании",
    },
    { path: "/services", text: "услуги" },
    { path: "/team", text: "команда" },
    { path: "/portfolio", text: "портфолио" },
    { path: "/contacts", text: "контакты" },
  ],
};

export const headerState = (state = initialState, action: any) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
