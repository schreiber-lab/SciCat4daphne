import { fieldsMap } from "../../../../components/Metadata/Row/fiedsMap";

export const Field = ({ field }) => {
  return (fieldsMap[field.type] || fieldsMap.string)({
    name: field.key_name,
    label: field.key_name,
    required: field.required,
    field
  });
};
