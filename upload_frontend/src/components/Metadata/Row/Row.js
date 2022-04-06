import { fieldsMap } from "./fiedsMap";

export const Row = ({ field, schemaName, baseKey }) => {
  return (fieldsMap[field.type] || fieldsMap.string)({
    name: `${baseKey}.${schemaName}.fields.${field.key_name}`,
    label: field.key_name,
    required: field.required,
    field
  });
};
