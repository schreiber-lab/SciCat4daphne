import { fieldsByTypesMap } from "./fieldsByTypesMap";
import { FixedValueEntriesAutocomplete } from "../../../modules/fixed-value-entries";

export const Row = ({ field, schema, baseKey }) => {
  const fieldProps = {
    name: `${baseKey}.${schema.schema_name}.fields.${field.key_name}`,
    label: field.key_name,
    required: field.required,
  };

  if (schema.fixed_value_entries) {
    return (
      <FixedValueEntriesAutocomplete
        {...fieldProps}
        multiple={schema.type === "list"}
        keyName={field.key_name}
        params={{ schema_name: schema.schema_name }}
      />
    );
  }

  return (fieldsByTypesMap[field.type] || fieldsByTypesMap.string)({
    ...fieldProps,
    field,
  });
};
