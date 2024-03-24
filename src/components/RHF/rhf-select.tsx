import { FormLabel, MenuItem, Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFSelect(props: any): JSX.Element {
  const {
    children,
    name,
    outerLabel,
    fullWidth = true,
    startIcon,
    endIcon,
    placeholder = "Select Option",
    ...others
  } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack gap={0.5}>
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <TextField
              select
              id="demo-simple-select"
              {...field}
              value={field.value ? field.value : ""}
              fullWidth={fullWidth}
              error={Boolean(error)}
              helperText={error?.message}
              FormHelperTextProps={{ sx: { ml: "3px" } }}
              InputProps={{
                startAdornment: startIcon ?? "",
                endAdornment: endIcon ?? "",
              }}
              {...others}
            >
              <MenuItem disabled value=" ">
                {placeholder}
              </MenuItem>
              {children}
            </TextField>
          </Stack>
        );
      }}
    />
  );
}
export default RHFSelect;
