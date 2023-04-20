import { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export type ContextProps = {
    redirectTo: NextRouter;
    handleLogin(data: ILoginRequest): Promise<void>;
    handleRegister(data: ILoginRequest): Promise<void>;
    handleSendEmailToResetPassword(email: string): Promise<void>;
    ForgotPassword(): Promise<void>,
    handleReset(token: string, password: string): Promise<void>,
    columns: any[],
    rows: never[],
    setRows: Dispatch<SetStateAction<never[]>>,
    handleGetBalances(): Promise<any>,
    handleNewBalances(file: any): Promise<any>
};

export type ProviderType = {
    children: ReactNode;
}

export type UserType = {
    email: string;
    password: string;
}

export type BubbleStyle = {
    [key: string]: string
};

export type CatchErrorType = {
    error: {
        response: {
            data: {
                message: string
            }
        }
    }
}

export type TryResponseType = {
    data: {
        token: string
    };
    status: number;
    statusText: string;
}

export interface IBubbleProps {
    style: CSSProperties;
}



export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {

}

export interface ValidationErrors {
    email?: { message: string };
    password?: { message: string };
}

export interface BodyProps {
    children: ReactNode;
}


