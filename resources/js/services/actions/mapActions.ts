export const SET_MAP_IS_LOADED: "SET_MAP_IS_LOADED" = "SET_MAP_IS_LOADED";

export interface ImapActions {
  type: typeof SET_MAP_IS_LOADED;
}

export const handleMapLoaded = () => {
  return {
    type: SET_MAP_IS_LOADED,
  };
};
