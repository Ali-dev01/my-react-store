import { Controller, useFormContext } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormLabel, Stack } from "@mui/material";

function RHFDatePicker(props: any) {
  const { name, outerLabel, fullWidth = true, variant = "outlined", ...others } = props;
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
                <DemoContainer sx={{ p: 0 }} components={["DatePicker"]}>
                  <DatePicker
                    {...field}
                    {...others}
                    disablePast
                    format="DD/MM/YYYY"
                    slotProps={{
                      textField: {
                        helperText: error && error?.message,
                        FormHelperTextProps: { sx: { ml: "3px" } },
                        error: Boolean(error),
                        fullWidth,
                        variant,
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
export default RHFDatePicker;
