import { Controller, useFormContext } from "react-hook-form";
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";

export const DatePicker = ({ name, ...props }) => {
  // React Hook Form
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formContext = name && useFormContext();

  return (
    <Controller
      name={name}
      control={formContext?.control}
      render={({ field: { ref, ...field } }) => (
        <MuiDatePicker
          // defaultChecked={false}
          animateYearScrolling
          format="L"
          {...field}
          {...props}
        />

      )}
    />
  );
};
