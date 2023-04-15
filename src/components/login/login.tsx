import formStyle from '../../styles/form.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {

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

    const onSubmitFunction = (data: any) => console.log(data);

    return (
        <div className={formStyle.formContainer} onSubmit={handleSubmit(onSubmitFunction)}>

            <form className={formStyle.form} style={{ height: "300px" }} >
                <h2 className={formStyle.title}>Login</h2>
                <TextField variant="outlined" type="text" label='email' {...register("email")} />
                {errors?.email?.message && (<span className={formStyle.error}>{errors?.email?.message}</span>)}
                <TextField variant="outlined" type="password" label='password' {...register("password")} />
                {errors?.password?.message && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <Button variant="contained" type="submit">Enviar</Button>
            </form>
        </div >
    )
}
