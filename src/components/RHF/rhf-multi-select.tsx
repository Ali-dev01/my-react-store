import { Autocomplete, FormLabel, Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFMultiSelect(props: any): JSX.Element {
  const {
    name,
    outerLabel,
    fullWidth = true,
    variant = "outlined",
    options,
    startIcon,
    endIcon,
    ...others
  } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <Stack gap={0.5}>
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <Autocomplete
              value={value || []}
              onChange={(e, newValue) => onChange(newValue)}
              sx={styles.autoCompleteStyles}
              multiple
              size="small"
              fullWidth={fullWidth}
              options={options}
              getOptionLabel={(option) => option.title}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  classes={{ root: "_root" }}
                  error={Boolean(error)}
                  variant={variant}
                  helperText={error?.message}
                  FormHelperTextProps={{ sx: { ml: "3px" } }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: <>{endIcon ?? params.InputProps.endAdornment}</>,
                    ...(startIcon && { startAdornment: startIcon }),
                  }}
                  {...others}
                />
              )}
            />
          </Stack>
        );
      }}
    />
  );
}
export default RHFMultiSelect;

const styles = {
  autoCompleteStyles: {
    "& ._root": {
      "& .MuiInputBase-root": {
        padding: "8px 10px",
        "& input": {
          padding: "2px 0 !important",
        },
      },
    },
  },
};
