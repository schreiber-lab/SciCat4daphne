import { createContext, useReducer } from "react";
import * as datasetsApi from "../../../api/datasets";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import * as types from "./types";

export const DatasetsContext = createContext();

export const DatasetsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getDatasets = () => {
    dispatch({ type: types.LOAD_DATASETS_REQUEST });

    return datasetsApi.getDatasets().then((data) => {
      dispatch({ type: types.LOAD_DATASETS_SUCCESS, payload: data });
    });
  };

  const addDataset = (payload) => {
    dispatch({ type: types.ADD_DATASET, payload });
  };

  const providerValue = {
    ...state,

    getDatasets,
    addDataset,
  };

  return (
    <DatasetsContext.Provider value={providerValue}>
      {children}
    </DatasetsContext.Provider>
  );
};
