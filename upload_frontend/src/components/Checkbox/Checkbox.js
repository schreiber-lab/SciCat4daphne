import { useFormContext, Controller } from "react-hook-form";
import MuiCheckbox from "@material-ui/core/Checkbox";

// prettier-ignore
export const Checkbox = ({
  name,

  ...props
}) => {
  // React Hook Form
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formContext = name && useFormContext();
  
  return (
    <Controller
        name={name}
        control={formContext?.control}
        render={({ field }) => (
            <MuiCheckbox
                inputRef={field.ref}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}

                { ...props}
            />
        )}
    />
  );
};
