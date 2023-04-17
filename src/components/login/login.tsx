import formStyle from '../../styles/form.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Context } from '@/context/context';
import { ILoginRequest } from '@/interfaces/interfaces';
import Link from 'next/link';


export default function Login() {
    const { handleLogin, redirectTo, ForgotPassword } = useContext(Context)

    const formSchema = yup.object().shape({
        email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
        password: yup.string().required("Password obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSubmitFunction(data: ILoginRequest | any) {
        handleLogin(data)
    }
    return (
        <div className={formStyle.formContainer} onSubmit={handleSubmit(onSubmitFunction)}>

            <form className={formStyle.form} style={{ height: "350px" }} >
                <h2 className={formStyle.title}>Login</h2>
                <TextField variant="outlined" type="text" label='email' {...register("email")} />
                {typeof errors?.email?.message === 'string' && (<span className={formStyle.error}>{errors?.email?.message}</span>)}
                <TextField variant="outlined" type="password" label='password' {...register("password")} />
                {typeof errors?.password?.message === 'string' && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <a onClick={() => { ForgotPassword() }}>Esqueceu a senha?</a>
                <Button variant="contained" type="submit">Iniciar sessão</Button>
                <Button variant="contained" onClick={() => {
                    redirectTo.push('/register')
                }}>Criar nova conta</Button>
            </form>
        </div >
    )
}
