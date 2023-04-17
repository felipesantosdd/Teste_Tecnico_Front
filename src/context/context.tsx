import { BubbleStyle, CatchErrorType, ContextProps, ILoginRequest, ProviderType, TryResponseType } from "@/interfaces/interfaces";
import { loginRequest } from "@/pages/api/login";
import { CSSProperties, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ErrorAlert, SuccessAlert, WarningAlert } from "@/components/alert/alert";
import { RegisterRequest } from "@/pages/api/register";
import Swal from "sweetalert2";



export const Context = createContext<ContextProps>({} as ContextProps)

export function Provider({ children }: ProviderType) {

    const redirectTo = useRouter()

    async function handleLogin(data: ILoginRequest) {
        try {
            const response: TryResponseType = await loginRequest(data)
            localStorage.setItem('token', response.data.token)
            redirectTo.push('/dashboard')
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
        }
    }

    async function handleRegister(data: ILoginRequest) {
        try {
            const response: any = await RegisterRequest(data)
            SuccessAlert('Cadastro concluído!')
            redirectTo.push('/login')
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
        }
    }

    async function ForgotPassword() {

        const { value: email } = await Swal.fire({
            title: 'Esqueceu o Password?',
            input: 'email',
            inputLabel: 'calma que vamos recupera-lo',
            inputPlaceholder: 'Digite seu endereço de e-email',
            confirmButtonText: 'Enviar',
            color: 'white',
            background: '#252525'
        })

        if (email) {
            handleResetPassword(email)
        }
    }


    async function handleResetPassword(email: string) {
        try {
            console.log(email)
            WarningAlert('Cheque sua caixa de entrada.')
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
        }
    }

    return (
        <Context.Provider value={{
            redirectTo,
            handleLogin,
            handleRegister,
            handleResetPassword,
            ForgotPassword
        }}>
            {children}
        </Context.Provider>
    );
}
