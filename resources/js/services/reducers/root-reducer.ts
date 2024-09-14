import { combineReducers } from "@reduxjs/toolkit";
import { store } from "../../index";
import { mapState } from "./mapReducer";
import { headerState } from "./headerReducer";
import { animationState } from "./animationReducer";

export type IRootState = ReturnType<typeof store.getState>;

export const rootReducer = combineReducers({
  mapState: mapState,
  headerState: headerState,
  animationState: animationState,
});
