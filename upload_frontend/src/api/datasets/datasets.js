import { api } from "../api";
import { transformMetadataSchemaRequest } from "../metadata-schemas";

export const getDatasets = (config) => {
  return api
    .get("/Datasets/fullquery", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const getDataset = (id, config = {}) => {
  return api
    .get("/Datasets/findOne", {
      ...config,

      headers: {
        filter: JSON.stringify({
          where: { pid: id },
          include: [
            { relation: "origdatablocks" },
            { relation: "datablocks" },
            { relation: "attachments" },
          ],
        }),
        ...config.headers,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const createDataset = (data) => {
  const scientificMetadata = transformMetadataSchemaRequest(data.scientificMetadata);
  
  return api
    .post("/Datasets", { ...data, scientificMetadata })
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};
