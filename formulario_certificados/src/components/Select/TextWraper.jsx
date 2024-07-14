// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {  Grid, InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextFieldWrapper = ({
  name,
  label,
  namelabel,
  type = "text",
  control,
  errors,
}) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <InputLabel>{namelabel}</InputLabel>
      </Grid>
      <Grid item xs={12}>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              margin="normal"
              label={label}
              type={type}
              error={!!errors[name]}
              helperText={errors[name] && `Este campo es requerido`}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

TextFieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  namelabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default TextFieldWrapper;
