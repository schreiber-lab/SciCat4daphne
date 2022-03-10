import { Yup } from "../../../utils/validation";

export const validationSchema = Yup.object({
  schemaName: Yup.string().nullable(),
  schemaType: Yup.string().nullable(),
});