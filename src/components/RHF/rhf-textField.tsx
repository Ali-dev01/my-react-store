import { FormLabel, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function RHFTextField(props: any): JSX.Element {
  const {
    name,
    type,
    fullWidth = false,
    readOnly = false,
    multiline = false,
    variant = "outlined",
    outerLabel,
    startIcon,
    endIcon,
    ...others
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control } = useFormContext();

  const endAdornment =
    type === "password" ? (
      <InputAdornment position="end">
        <IconButton
          size="small"
          aria-label="Toggle Password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </IconButton>
      </InputAdornment>
    ) : (
      endIcon
    );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }): JSX.Element => {
        return (
          <Stack gap={0.5}>
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <TextField
              {...field}
              fullWidth={fullWidth}
              type={showPassword ? "text" : type}
              variant={variant}
              multiline={multiline}
              rows={multiline ? 4 : 0}
              error={Boolean(error)}
              helperText={error?.message}
              FormHelperTextProps={{ sx: { ml: "3px" } }}
              InputProps={{ readOnly, endAdornment, startAdornment: startIcon }}
              {...others}
            />
          </Stack>
        );
      }}
    />
  );
}
export default RHFTextField;
