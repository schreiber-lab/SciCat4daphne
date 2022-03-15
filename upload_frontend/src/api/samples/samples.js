import { api } from "../api";

export const getSamples = (config) => {
  return api
    .get("/Samples", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const getSample = (id, config) => {
  return api
    .get(`/Samples/${id}`, config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const createSample = (data) => {
    return api
      .post('/Samples', data)
      .then(({ data }) => {
        return data;
      })
      .catch((data) => {
        throw data;
      });
  };

  export const deleteSample = (id, config) => {
    return api
      .delete(`/Samples/${id}`, config)
      .then(({ data }) => {
        return data;
      })
      .catch((data) => {
        throw data;
      });
  };

  export const editSample = (sample, config) => {
    return api
      .put(`/Samples/${sample.sampleId}`, sample, config)
      .then(({ data }) => {
        return data;
      })
      .catch((data) => {
        throw data;
      });
  };