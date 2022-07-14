import { Fragment, useState } from "react";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import {
  FormControlLabel,
  Checkbox,
  Collapse,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddIcon from "@material-ui/icons/Add";
import { Entry } from "./Entry";

export const Schema = ({ schema, baseKey }) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const { control, getValues } = useFormContext();
console.log( getValues())
  const { fields, append, remove } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: `${baseKey}.${schema.schema_name}`,
    }
  );
  const toggleCollapse = () => {
    setOpenCollapse((isOpen) => !isOpen);
  };

  const addEntry = () => {
    append({ isActive: true });
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
        <Grid container spacing={2}>
          {schema.multiples_entries ? (
            <>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={addEntry}
                >
                  Add entry
                </Button>
              </Grid>

              {fields.map((_, index) => (
                <Fragment key={index}>
                  <Grid item container spacing={2}>
                    <Grid item xs>
                      <Grid container spacing={2}>
                        <Entry
                          schema={schema}
                          baseKey={baseKey}
                          index={index}
                        />
                      </Grid>
                    </Grid>

                    <Grid item>
                      <IconButton color="error" onClick={() => remove(index)}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Fragment>
              ))}
            </>
          ) : (
            <Entry schema={schema} baseKey={baseKey} />
          )}
        </Grid>
      </Collapse>
    </div>
  );
};
