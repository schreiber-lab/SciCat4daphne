import { createHookReducer } from "../../../helpers/createHookReducer";
import * as types from "./types";

export const reducer = createHookReducer({
  [types.ADD_DATASET]: (state, dataset ) => {
    return {
      ...state,

      datasets: [ dataset, ...state.datasets ]
    };
  },

  [types.LOAD_DATASETS_REQUEST]: (state) => {
    return {
      ...state,

      isLoaded: false,
      datasets: [],
    };
  },

  [types.LOAD_DATASETS_SUCCESS]: (state, data) => {
    return {
      ...state,

      isLoaded: true,
      datasets: data,
    };
  },

  [types.LOAD_DATASETS_ERROR]: (state) => {
    return {
      ...state,

      isLoaded: false,
      datasets: [],
    };
  },
});
