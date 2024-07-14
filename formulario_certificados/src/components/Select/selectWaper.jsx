// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectWrapper = ({
  name,
  label,
  namelabel,
  data = [],
  control,
  errors,
}) => {
  return (
    <FormControl fullWidth margin="normal" error={!!errors[name]}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            value={field.value || ""}
            onChange={(e) => field.onChange(e.target.value)}
            label={namelabel}
          >
            {data.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors[name] && (
        <FormHelperText>
          {errors[name].type === "required" && `${label} es requerido`}
        </FormHelperText>
      )}
    </FormControl>
  );
};

SelectWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  namelabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectWrapper;
