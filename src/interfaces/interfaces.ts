import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export type ContextProps = {
    bubbleStyles: CSSProperties[];
    setBubbleStyles: Dispatch<SetStateAction<CSSProperties[]>>;
    bubbles(): void;
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


export interface IBubbleProps {
    style: CSSProperties;
}



export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {

}