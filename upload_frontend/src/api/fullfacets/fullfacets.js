import { api } from "../api";

export const getFullfacets = (config) => {
  return api
    .get("/Datasets/fullfacet", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};
