import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFRadioGroup(props: any) {
  const { name, outerLabel, disabled, options } = props;

  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack gap={0.5}>
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <FormControl error={Boolean(error)}>
              <RadioGroup {...field} row>
                {options?.map(({ value, label }: { value: string; label: string }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    label={label}
                    control={<Radio size="small" disabled={disabled} />}
                  />
                ))}
              </RadioGroup>
              {Boolean(error) && (
                <FormHelperText sx={{ ml: "3px" }}>{error?.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>
        );
      }}
    />
  );
}
export default RHFRadioGroup;
