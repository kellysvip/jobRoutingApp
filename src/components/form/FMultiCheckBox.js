import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const FMultiCheckBox = ({ name, options, ...other }) => {
  const { control } = useForm();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option) => {
         return field.value.includes(option)
            ? field.value.filter((value) => value !== option)
            : [...field.value, option];
        };
        return (
            <FormGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        control={
                            <Checkbox checked={field.value.includes(option)}
                            onChange={() => field.onChange(onSelected(option))} 

                             />
                        }
                        label={option}
                        {...other}
                    />
                ))}
            </FormGroup>
        )
      }}
    />
  );
};

export default FMultiCheckBox;
