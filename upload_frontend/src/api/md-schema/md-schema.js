import { api } from "../api";


export const createMDSchemaKey = (data) => {
  return api
    .post("/MDSchema", data)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};
