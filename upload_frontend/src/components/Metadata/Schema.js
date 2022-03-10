import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormControlLabel,
  Checkbox,
  Collapse,
  IconButton,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Row } from "./Row";

export const Schema = ({ schema, baseKey }) => {
  const [ openCollapse, setOpenCollapse ] = useState(false);
  const { control } = useFormContext();

  const toggleCollapse = () => {
    setOpenCollapse((isOpen) => !isOpen);
  };

  return (
    <div>
      <IconButton edge="start" onClick={toggleCollapse}>
        <KeyboardArrowDownIcon />
      </IconButton>

      <FormControlLabel
        control={
          <Controller
            name={`${baseKey}.${schema.schema_name}.isActive`}
            control={control}
            render={({ field }) => (
              <Checkbox
                inputRef={field.ref}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        }
        label={schema.schema_name}
      />

      <Collapse in={openCollapse} timeout="auto">
        {schema.keys.map((field) => (
          <Row
            key={field.key_name}
            field={field}
            schemaName={schema.schema_name}
            baseKey={baseKey}
          />
        ))}
      </Collapse>
      </div>
  );
};