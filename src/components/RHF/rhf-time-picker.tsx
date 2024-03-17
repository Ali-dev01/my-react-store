import { FormLabel, Stack } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Controller, useFormContext } from "react-hook-form";

function RHFTimePicker(props: any) {
  const { name, outerLabel, readOnly, fullWidth = true, variant = "outlined", ...others } = props;
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <Stack gap={0.5}>
              {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ p: 0 }} components={["TimePicker"]}>
                  <TimePicker
                    {...field}
                    {...others}
                    readOnly={readOnly}
                    slotProps={{
                      textField: {
                        error: Boolean(error),
                        variant,
                        fullWidth,
                        helperText: error && error?.message,
                        FormHelperTextProps: { sx: { ml: "3px" } },
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          );
        }}
      />
    </>
  );
}
export default RHFTimePicker;
