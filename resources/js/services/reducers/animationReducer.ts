import {SET_ABOUT_ANIMATED, SET_FEMIDA_ANIMATED} from "../actions/animationActions";

export interface IAnimationReducer {
  shouldAboutAnimate: boolean;
  shouldFemidaAnimate: boolean
}
const initialState: IAnimationReducer = {
  shouldAboutAnimate: true,
  shouldFemidaAnimate: true
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
      case SET_FEMIDA_ANIMATED: {
      return {
        ...state,
        shouldFemidaAnimate: false
      }
    }
    default: {
      return state;
    }
  }
};
