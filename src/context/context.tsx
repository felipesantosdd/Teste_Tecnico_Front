import { BubbleStyle, CatchErrorType, ContextProps, ILoginRequest, ProviderType, TryResponseType } from "@/interfaces/interfaces";
import { loginRequest } from "@/pages/api/login";
import { CSSProperties, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ErrorAlert, SuccessAlert } from "@/components/alert/alert";
import { RegisterRequest } from "@/pages/api/register";



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

    return (
        <Context.Provider value={{ redirectTo, handleLogin, handleRegister }}>
            {children}
        </Context.Provider>
    );
}
