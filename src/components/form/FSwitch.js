import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Switch, FormControlLabel } from '@mui/material'

const FSwitch = ({name, ...other}) => {
    const {control} = useForm()
  return (
    <FormControlLabel
        control = {
            <Controller 
                name={name}
                control={control}
                render={({field}) => <Switch {...field} checked={field.value}/> }
            />
        }
        {...other}
    />
  )
}

export default FSwitch
