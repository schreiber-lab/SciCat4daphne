import { Yup } from "../../../utils/validation";

export const validationSchema = Yup.object({
  full_name:Yup.string().nullable().required(),
  material_id: Yup.string().nullable().required(),
  formula: Yup.string().nullable()
});
