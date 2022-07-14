import { fieldsByTypesMap } from "./fieldsByTypesMap";
import { FixedValueEntriesAutocomplete } from "../../../modules/fixed-value-entries";

export const Row = ({ field, schema, baseKey, index }) => {
  const schemaName = schema.schema_name + (schema.multiples_entries ? `[${index}]` : "");
  const fieldProps = {
    name: `${baseKey}.${schemaName}.fields.${field.key_name}`,
    label: field.key_name,
    required: field.required,
  };

  if (schema.id_key === field.key_name) {
    return (
      <FixedValueEntriesAutocomplete
        {...fieldProps}
        multiple={field.type === "list"}
        keyName={field.key_name}
        baseKey={`${baseKey}.${schemaName}.fields`}
        params={{ schema_name: schema.schema_name }}
      />
    );
  }

  return (fieldsByTypesMap[field.type] || fieldsByTypesMap.string)({
    ...fieldProps,

    disabled: schema.fixed_value_entries,
    field,
  });
};
