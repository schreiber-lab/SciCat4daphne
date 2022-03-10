import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
// import { useForm, FormProvider } from "react-hook-form";
// import { preventDefault } from "../../../../helpers/preventDefault";
// import { yupResolver } from "../../utils/validation";
import { getDatasetMetadataSchema } from "../../../../../api/dataset-metada-schema";
import { Schema } from "./Schema";

export const Metadata = () => {
  const [datasetMetadataSchema, setDatasetMetadataSchema] = useState(null);
  console.log(datasetMetadataSchema);

  // const form = useForm({
  //   // defaultValues,
  //   // resolver: yupResolver(validationSchema),
  // });

  // const handleSubmit = () => {};

  useEffect(() => {
    getDatasetMetadataSchema().then((datasetMetadataSchema) => {
      setDatasetMetadataSchema(datasetMetadataSchema);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4">Metadata</Typography>

      {datasetMetadataSchema?.map((schema) => (
        <Schema key={schema.schema_name} schema={schema} />
      ))}
    </div>
  );
};
