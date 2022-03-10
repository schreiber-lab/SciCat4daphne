import { useState, useEffect } from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import { getMetadataSchemas } from "../../api/metadata-schemas";
import { Schema } from "./Schema";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(2),
  },
}));

export const Metadata = ({ baseKey, objectType, title }) => {
  const classes = useStyles();
  const [metadataSchemas, setMetadataSchemas] = useState(null);

  useEffect(() => {
    getMetadataSchemas({
      params: {
        object_type: objectType,
      },
    }).then((metadataSchemas) => {
      setMetadataSchemas(metadataSchemas);
    });
  }, []);

  return (
    <Container className={classes.root}>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>

      {metadataSchemas?.map((schema) => (
        <Schema key={schema.schema_name} schema={schema} baseKey={baseKey} />
      ))}
    </Container>
  );
};
