import { Yup } from "../../../utils/validation";

export const validationSchema = Yup.object({
  name: Yup.string().nullable(),
  customMetadata: Yup.string().nullable(),
});