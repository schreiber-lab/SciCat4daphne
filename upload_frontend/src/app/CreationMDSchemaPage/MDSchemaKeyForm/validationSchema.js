import { Yup } from "../../../utils/validation";

export const validationSchema = Yup.object({
  keyName: Yup.string().nullable(),
  keyType: Yup.string().nullable().required(),
});
