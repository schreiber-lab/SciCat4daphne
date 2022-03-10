import { createReduxReducer } from "../../helpers/createReduxReducer";
import * as types from "./types";

const initialState = {
  isLoaded: false,
  datasets: [],
  filter: {},
};

export const reducer = createReduxReducer(initialState, {
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
