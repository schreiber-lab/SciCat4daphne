import { api } from "../api";

export const getInstruments = (config) => {
  return api
    .get("/Instruments", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const getInstrument = (id, config) => {
  return api
    .get(`/Instruments/${id}`, config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};


export const createInstrument = (data) => {
  return api
    .post('/Instruments', data)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

