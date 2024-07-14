// eslint-disable-next-line no-unused-vars
import React from 'react'
// useFormulario.js
import { useForm } from 'react-hook-form';
import { useDialong } from './useDialog';


export const useFormulario = () => {
    const {
        isOpen,
        dialongContent,
        handleOpenDialog,
        handleCloseDialog,
        setDialongContent,
    } = useDialong();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        reset
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
        handleOpenDialog()
        setDialongContent({ title: "Se Agendo exitosamente", message: "Se agendo con exito" })
        reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue(name, value);
    };

    return {
        register,
        handleSubmit,
        isOpen,
        dialongContent,
        handleOpenDialog,
        handleCloseDialog,
        errors,
        control,
        setValue,
        onSubmit,
        handleChange,
    };
};