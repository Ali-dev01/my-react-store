"use client";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/RHF/form-provider";
import RHFTextField from "@/components/RHF/rhf-textField";
import { Box, MenuItem } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFSelect from "@/components/RHF/rhf-select";
import RHFCheckbox from "@/components/RHF/rhf-checkbox";
import RHFRadioGroup from "@/components/RHF/rhf-radio-group";
import RHFMultiSelect from "@/components/RHF/rhf-multi-select";
import RHFDatePicker from "@/components/RHF/rhf-date-picker";
import RHFTimePicker from "@/components/RHF/rhf-time-picker";
import CustomButton from "@/components/custom-button";

const options = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
const categories = [
  { title: "Fashion", id: "1" },
  { title: "Game", id: "2" },
  { title: "Electronics", id: "3" },
  { title: "Toys", id: "4" },
  { title: "Mobiles", id: "5" },
  { title: "Glasses", id: "6" },
];

function HomeSection() {
  const methods = useForm({
    defaultValues: {
      password: "",
      city: "",
      textarea: "",
      gender: "",
      agree: false,
      categories: [],
      startDate: "",
      startTime: "",
    },
    resolver: yupResolver(
      Yup.object({
        password: Yup.string().required("Required Field").min(8, "Minimum 8 characters required"),
        city: Yup.string().required("Required Field"),
        textarea: Yup.string().required("Required Field"),
        gender: Yup.string().required("Required Field"),
        categories: Yup.array().min(1, "Required Field").required("Required Field"),
        startDate: Yup.string().required("Required Field"),
        startTime: Yup.string().required("Required Field"),
        agree: Yup.boolean().test("is-true", "Required Field", (value) => value === true),
      })
    ),
  });
  const { handleSubmit } = methods;

  const handleForm = (values: any) => {
    console.log(values);
  };

  return (
    <Box p={2}>
      <h5>Home</h5>
      <br />
      <FormProvider methods={methods} onSubmit={handleSubmit(handleForm)}>
        <RHFTextField
          name="password"
          type="password"
          variant="outlined"
          fullWidth={false}
          outerLabel="Password"
          placeholder="Password"
        />
        <br />
        <RHFSelect name="city" fullWidth={false} outerLabel="City">
          <MenuItem value="lahore">Lahore</MenuItem>
          <MenuItem value="gujranwala">Gujranwala</MenuItem>
          <MenuItem value="faislabad">Faislabad</MenuItem>
        </RHFSelect>
        <br />
        <RHFTextField
          name="textarea"
          fullWidth={false}
          multiline={true}
          outerLabel="Message"
          variant="outlined"
          placeholder="Write something..."
        />
        <br />
        <RHFCheckbox name="agree" label="Are you agree" disabled={false} />
        <br />
        <br />
        <RHFRadioGroup name="gender" outerLabel="Gender" options={options} />
        <br />
        <RHFMultiSelect
          name="categories"
          fullWidth
          variant="outlined"
          outerLabel="Categories"
          placeholder="Categories"
          options={categories}
        />
        <br />
        <RHFDatePicker name="startDate" outerLabel="Start Date" fullWidth={false} />
        <br />
        <RHFTimePicker
          name="startTime"
          outerLabel="Start Time"
          fullWidth={false}
          readOnly={false}
        />
        <br />
        <CustomButton variant="contained" type="submit">
          Submit
        </CustomButton>
        <br />
        <br />
        <CustomButton variant="outlined">Outlined</CustomButton>
        <br />
        <br />
        <CustomButton variant="text">Text Button</CustomButton>
      </FormProvider>
    </Box>
  );
}

export default HomeSection;
