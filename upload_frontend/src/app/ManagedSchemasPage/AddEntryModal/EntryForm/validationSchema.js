import { Yup } from "../../../../utils/validation";

export const validationSchema = Yup.object({
  material_id: Yup.string().nullable().required(),
  full_name:Yup.string().nullable(),
  formula: Yup.string().nullable(),
  composition: Yup.string().nullable()
});
