import formStyle from '../../styles/form.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { WarningAlert } from '../alert/alert';


export default function Register() {

    const formSchema = yup.object().shape({
        firstName: yup.string().required("Como devemos te chamar?"),
        email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
        password: yup.string().required("Password obrigatório"),
        passwordConfirm: yup.string().required("Password obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSubmitFunction(data: any) {


        if (data.passwordConfirm != data.password) {
            WarningAlert("A confirmação da senha não corresponde à senha digitada.")
        }

        console.log(data)

    };

    return (
        <div className={formStyle.formContainer} style={{ height: "450px" }} onSubmit={handleSubmit(onSubmitFunction)}>
            <form className={formStyle.form} >
                <span className={formStyle.title}>Registro</span>
                <TextField variant="outlined" type="text" label='Primeiro Nome' {...register("firstName")} />
                {errors?.firstName?.message && (<span className={formStyle.error}>{errors?.firstName?.message}</span>)}
                <TextField variant="outlined" type="text" label='email' {...register("email")} />
                {errors?.email?.message && (<span className={formStyle.error}>{errors?.email?.message}</span>)}
                <TextField variant="outlined" type="password" label='password' {...register("password")} />
                {errors?.password?.message && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <TextField variant="outlined" type="password" label='confime password' {...register("passwordConfirm")} />
                {errors?.password?.message && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <Button variant="contained" type="submit">Enviar</Button>
            </form>
        </div >
    )
}
