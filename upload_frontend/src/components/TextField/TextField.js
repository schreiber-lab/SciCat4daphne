import { forwardRef } from "react";
import { useFormContext, useController } from "react-hook-form";
import MuiTextField from "@material-ui/core/TextField";

// prettier-ignore
export const TextField = forwardRef(({
  unbindForm = false,
  name,
  InputLabelProps,

  ...props
}, ref) => {
  // React Hook Form
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formContext = name && useFormContext();
  const formRegister = formContext?.register?.(name);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fieldState } = (formContext && useController({
    name,
    control: formContext?.control
  })) || {};
  const errorMessage = fieldState?.error?.message;

  return (
    <MuiTextField
      error={!!errorMessage}
      helperText={errorMessage}

      {...formRegister}
      {...props}

      InputLabelProps={formContext?.getValues(name) ? { shrink: true } : {}}
      ref={(!unbindForm && formRegister?.ref) || ref}
    />
  );
});
