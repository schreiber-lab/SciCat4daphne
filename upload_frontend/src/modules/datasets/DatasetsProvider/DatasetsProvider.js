import { createContext, useReducer } from "react";
import * as datasetsApi from "../../../api/datasets";
import * as fullfacetsApi from "../../../api/fullfacets";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import * as types from "./types";

export const DatasetsContext = createContext();

export const DatasetsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updatePagination = (payload) => {
    dispatch({ type: types.UPDATE_PAGINATION, payload });
  };

  const getDatasets = (filter) => {
    dispatch({ type: types.LOAD_DATASETS_REQUEST });
   
    return fullfacetsApi.getFullfacets().then((data) => {
      updatePagination({ total: data[0].all[0].totalSets });

      return datasetsApi.getDatasets({
        params: {
          fields: { mode: {} },
          limits: {
            skip: state.pagination.skip,
            limit: state.pagination.limit,
            order: "creationTime:desc",

            ...filter?.limits
          }
        }
      }).then((data) => {
        dispatch({ type: types.LOAD_DATASETS_SUCCESS, payload: data });
      });
    });
  };

  const handlePaginationChange = (pagination) => {
    const { total, ...limits } = pagination;

    updatePagination(pagination);

    getDatasets({ limits });
  };

  const addDataset = (payload) => {
    dispatch({ type: types.ADD_DATASET, payload });
  };

  const providerValue = {
    ...state,

    getDatasets,
    addDataset,
    handlePaginationChange,
  };

  return (
    <DatasetsContext.Provider value={providerValue}>
      {children}
    </DatasetsContext.Provider>
  );
};
