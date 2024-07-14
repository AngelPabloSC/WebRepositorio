// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField as MuiTextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SelectWrapper from "./Select/selectWaper";
import TextFieldWrapper from "./Select/TextWraper";
import { useFormulario } from "../hooks/useFormulario";

const ServiceOptions = [
  "MATRICULAS",
  "BECAS",
  "INGLES",
  "MALLAS CURRICULARES",
  "PLAN DE PAGOS",
  "CONVENIOS",
];

const CitiesUIDE = ["LOJA", "QUITO", "GUAYAQUIL"];

const availableTimes = [
  "12:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];

const ReservationForm = () => {
  const {
    register,
    isOpen,
    handleSubmit,
    dialongContent,
    handleCloseDialog,

    errors,
    control,

    onSubmit,
    handleChange,
  } = useFormulario();
  const { title, message: messageDialog } = dialongContent;
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <Typography variant="h5" align="center" marginY={2}>
        Contactenos
      </Typography>
      <Typography variant="h5" align="center" marginY={2}>
        Resolvemos sus dudas
      </Typography>
      <TextFieldWrapper
        control={control}
        namelabel="Nombres"
        name="name"
        handleChange={handleChange}
        type="text"
        {...register("name", { required: true })}
        errors={errors}
      />
      <TextFieldWrapper
        control={control}
        namelabel="Apellidos"
        name="lastname"
        handleChange={handleChange}
        type="text"
        {...register("lastname", { required: true })}
        errors={errors}
      />
      <SelectWrapper
        control={control}
        label="Servicios "
        name="assistance"
        namelabel="¿Servicios?"
        handleChange={handleChange}
        data={ServiceOptions}
        {...register("assistance", { required: true })}
        errors={errors}
      />
      <SelectWrapper
        control={control}
        label="Ciudad "
        name="city"
        namelabel="Ciudad"
        handleChange={handleChange}
        data={CitiesUIDE}
        {...register("city", { required: true })}
        errors={errors}
      />
      <MuiTextField
        id="date"
        label="Fecha de reserva"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("date", { required: true })}
        onChange={handleChange}
        autoComplete="off"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Hora</InputLabel>
        <Select
          {...register("time", { required: true })}
          onChange={handleChange}
        >
          {availableTimes.map((time, index) => (
            <MenuItem key={index} value={time}>
              {time}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        margin="normal"
        required
        fullWidth
        id="idNumber"
        label="Número de identificación"
        name="idNumber"
        autoComplete="off"
        onInput={(event) => {
          const { target } = event;
          const valueInput = target.value;

          const valueRegex = valueInput.replace(/\D/g, "");
          target.value = valueRegex;
        }}
        {...register("idNumber", { required: true })}
        helperText={errors?.idNumber && "Este campo es requerido"}
        error={Boolean(errors?.idNumber)}
        inputProps={{ maxLength: 13, minLength: 10 }}
        type="tel"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          color: "#fff",
          background: "red",
          maxHeight: "30px",
          maxWidth: "30%",
          marginLeft: "35%",
        }}
      >
        Solicitar
      </Button>
      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{messageDialog}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReservationForm;
