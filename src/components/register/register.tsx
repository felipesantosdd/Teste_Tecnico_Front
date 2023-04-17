import formStyle from '../../styles/form.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { WarningAlert } from '../alert/alert';
import { Context } from '@/context/context';
import { useRouter } from 'next/router';


export default function Register() {

    const { handleRegister, redirectTo } = useContext(Context)


    const formSchema = yup.object().shape({
        name: yup.string().required("Como devemos te chamar?"),
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
            return WarningAlert("A confirmação da senha não corresponde à senha digitada.")

        }

        handleRegister(data)
    };

    return (
        <div className={formStyle.formContainer} style={{ height: "450px" }} onSubmit={handleSubmit(onSubmitFunction)}>
            <form className={formStyle.form} >
                <span className={formStyle.title}>Registro</span>
                <TextField variant="outlined" type="text" label='Primeiro Nome' {...register("name")} />
                {typeof errors?.name?.message === 'string' && (<span className={formStyle.error}>{errors?.name?.message}</span>)}
                <TextField variant="outlined" type="text" label='email' {...register("email")} />
                {typeof errors?.email?.message === 'string' && (<span className={formStyle.error}>{errors?.email?.message}</span>)}
                <TextField variant="outlined" type="password" label='password' {...register("password")} />
                {typeof errors?.password?.message === 'string' && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <TextField variant="outlined" type="password" label='confime password' {...register("passwordConfirm")} />
                {typeof errors?.passwordConfirm?.message === 'string' && (<span className={formStyle.error}>{errors?.passwordConfirm?.message}</span>)}
                <Button variant="contained" type="submit">Registrar</Button>
                <Button variant="contained" onClick={() => {
                    redirectTo.push('/login');
                }}>Login</Button>
            </form>
        </div >
    )
}
