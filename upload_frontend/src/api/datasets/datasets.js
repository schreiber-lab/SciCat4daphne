import { api } from "../api";
import { transformMetadataSchemaRequest } from "../metadata-schemas";

const transformDatasetRequest = (dataset) => {
  console.log(dataset.scientificMetadata)
  return {
    ...dataset,

    pid: dataset.proposalId + "/" + dataset.sampleId + "/" + dataset.datasetName,
    scientificMetadata: transformMetadataSchemaRequest(dataset.scientificMetadata)
  };
};

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
  return api
    .post("/Datasets", transformDatasetRequest(data))
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};
