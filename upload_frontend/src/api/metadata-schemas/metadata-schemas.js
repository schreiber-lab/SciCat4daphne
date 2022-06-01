import { api2 } from "../api";
import { removeEmpty } from "../../helpers/removeEmpty";

export const transformMetadataSchemaRequest = (metadataSchema) => {
  return Object.entries(metadataSchema).reduce(
    (scientificMetadata, [name, metadata]) => {
      const filledFields = metadata.fields
        ? removeEmpty(metadata.fields, (value) => !value)
        : {};
      const isValid = metadata.isActive && Object.keys(filledFields).length;

      return Object.assign(
        scientificMetadata,
        isValid ? { [name]: filledFields } : {}
      );
    },
    {}
  );
};

export const getMetadataSchemas = (config) => {
  return api2
    .get("/addons/metadata_schemas", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const getMetadataSchema = (config) => {
  return api2
    .get("/addons/get_metadata_schema", config)
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};

export const validateMetadataSchema = (data) => {
  return api2
    .post("/addons/validate", {
      ...data,

      metadata: transformMetadataSchemaRequest(data.metadata),
    })
    .then(({ data }) => {
      return data;
    })
    .catch((data) => {
      throw data;
    });
};
