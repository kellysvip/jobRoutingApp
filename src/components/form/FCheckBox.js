import { useForm, Controller } from "react-hook-form";
// import { FormControlLabel, Checkox } from "@mui/material/FormControlLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
const FCheckBox = ({ name, ...other }) => {
  const { control } = useForm();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
};

export default FCheckBox;
