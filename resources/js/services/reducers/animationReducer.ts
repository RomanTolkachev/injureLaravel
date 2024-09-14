import { SET_ABOUT_ANIMATED } from "../actions/animationActions";

export interface IAnimationReducer {
  shouldAboutAnimate: boolean;
}
const initialState: IAnimationReducer = {
  shouldAboutAnimate: true,
};

export const animationState = (
  state: IAnimationReducer = initialState,
  action: any,
) => {
  switch (action.type) {
    case SET_ABOUT_ANIMATED: {
      return {
        ...state,
        shouldAboutAnimate: false,
      };
    }
    default: {
      return state;
    }
  }
};
