// import { useFormContext, Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FTextField = ({ name, ...other }) => {
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
};

export default FTextField;
