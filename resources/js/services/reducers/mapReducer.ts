import { SET_MAP_IS_LOADED } from "../actions/mapActions";

export interface IMapReducer {
  isMapLoaded: boolean;
}

const initialState: IMapReducer = {
  isMapLoaded: false,
};

export const mapState = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MAP_IS_LOADED: {
      return {
        ...state,
        isMapLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};
