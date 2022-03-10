import { createReduxReducer } from "../../helpers/createReduxReducer";
import * as types from "./types";

const initialState = {
  isLoaded: false,
  mdSchemaKeys: [],
  filter: {},
};

export const reducer = createReduxReducer(initialState, {
  [types.ADD_MD_SCHEMA_KEY]: (state, mdSchemaKey) => {
    return {
      ...state,

      mdSchemaKeys: [ mdSchemaKey, ...state.mdSchemaKeys ]
    };
  },

});
