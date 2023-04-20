import { BubbleStyle, CatchErrorType, ContextProps, ILoginRequest, ProviderType, TryResponseType } from "@/interfaces/interfaces";
import { loginRequest } from "@/pages/api/login";
import { CSSProperties, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ErrorAlert, SuccessAlert, WarningAlert } from "@/components/alert/alert";
import { RegisterRequest } from "@/pages/api/register";
import Swal from "sweetalert2";
import { sendEmailToResetRequest } from "@/pages/api/sendEmail";
import { resetPasswordRequest } from "@/pages/api/reset";
import { Button } from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";
import { getBalancesRequest } from "@/pages/api/getBalances";
import { deleteBalancesRequest } from "@/pages/api/delete";
import React from "react";
import { newBalancesRequest } from "@/pages/api/newBalance";



export const Context = createContext<ContextProps>({} as ContextProps)

export function Provider({ children }: ProviderType) {

    const redirectTo = useRouter()

    const [showModal, setShowModal] = useState(false);




    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };



    const columns: any[] = [
        { field: 'document', headerName: 'Document', width: 200 },
        {
            field: 'date',
            headerName: 'Data',
            type: 'number',
            width: 200,
        },
        {
            field: 'value',
            headerName: 'Valor',
            type: 'number',
            width: 200,
        },
        {
            field: 'id',
            headerName: '',
            width: 190,
            renderCell: (params: any) => (
                <Button style={{ margin: 'auto' }} variant="contained" onClick={() => handleDelete(params.value)}>
                    <GridDeleteIcon />
                </Button>
            ),
        },

    ];

    const [rows, setRows] = useState([])

    async function handleLogin(data: ILoginRequest) {
        try {
            handleOpen()
            const response: TryResponseType = await loginRequest(data)
            localStorage.setItem('token', response.data.token)
            const rows = await handleGetBalances()
            redirectTo.push('/dashboard')
            handleClose()
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
            handleClose()

        }
    }

    async function handleRegister(data: ILoginRequest) {
        try {
            handleOpen()
            const response: any = await RegisterRequest(data)
            SuccessAlert('Cadastro concluído!')
            redirectTo.push('/login')
            handleClose()
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
            handleClose()
        }
    }

    async function handleGetBalances() {
        try {
            const response = await getBalancesRequest()
            setRows(response.data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    async function handleNewBalances(file: any) {
        try {
            const response = await newBalancesRequest(file)
            SuccessAlert("Seu Arquivo Foi Carregado com sucesso!")
            return response.data
            await handleGetBalances()
        } catch (error) {
            ErrorAlert("Algo deu errado...")
            console.error(error)
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
            const data: any = { email: email }
            handleSendEmailToResetPassword(data)
        }
    }


    async function handleSendEmailToResetPassword(email: string) {
        try {
            const response = await sendEmailToResetRequest(email)
            WarningAlert('Cheque sua caixa de entrada.')
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
        }
    }

    async function handleReset(token: any, password: string) {
        try {
            const response = await resetPasswordRequest(token.token, password)
            SuccessAlert('Password Alterado')
            redirectTo.push("/login")
        } catch (error: CatchErrorType | any) {
            ErrorAlert(error.response.data.message)
        }
    }

    async function handleDelete(id: string) {
        try {
            const response = await deleteBalancesRequest(id)
            await handleGetBalances()
            return response
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        handleGetBalances()
    }, [rows])


    return (
        <Context.Provider value={{
            redirectTo,
            handleLogin,
            handleRegister,
            handleSendEmailToResetPassword,
            ForgotPassword,
            handleReset,
            columns,
            rows,
            setRows,
            handleGetBalances,
            handleNewBalances,
            open,
            setOpen,
            handleClose,
            handleOpen,
            showModal
        }}>
            {children}
        </Context.Provider>
    );
}
