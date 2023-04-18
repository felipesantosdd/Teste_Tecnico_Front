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
import { WarningAlert } from '../alert/alert';


export default function Reset(token: any) {
    const { handleReset, redirectTo } = useContext(Context)

    const formSchema = yup.object().shape({

        password: yup.string().required("Password obrigatório"),
        passwordConfirm: yup.string().required("Confirmação de password Obrigatoria")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSubmitFunction(data: ILoginRequest | any) {

        if (data.passwordConfirm != data.password) {
            return WarningAlert("A confirmação da senha não corresponde à senha digitada.")

        }

        handleReset(token, data.password)
    }
    return (
        <div className={formStyle.formContainer} onSubmit={handleSubmit(onSubmitFunction)}>

            <form className={formStyle.form} style={{ height: "350px" }} >
                <h2 className={formStyle.title}>Resetar Password</h2>
                <TextField variant="outlined" type="password" label='Novo password' {...register("password")} />
                {typeof errors?.password?.message === 'string' && (<span className={formStyle.error}>{errors?.password?.message}</span>)}
                <TextField variant="outlined" type="password" label='Comfirme o Password' {...register("passwordConfirm")} />
                {typeof errors?.passwordConfirm?.message === 'string' && (<span className={formStyle.error}>{errors?.passwordConfirm?.message}</span>)}

                <Button variant="contained" type="submit">Redefinir</Button>
                <Button variant="contained" onClick={() => {
                    redirectTo.push('/login')
                }}>Cancelar</Button>
            </form>
        </div >
    )
}
