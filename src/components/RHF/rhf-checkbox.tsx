import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFCheckbox(props: any) {
  const { name, label, ...others } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl error={Boolean(error)}>
            <FormControlLabel
              label={label}
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  disabled={others?.disabled}
                  {...others}
                />
              }
            />
            {error && <FormHelperText sx={{ ml: "3px", mt: 0 }}>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
}
export default RHFCheckbox;
