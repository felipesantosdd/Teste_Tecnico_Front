import { ILoginRequest } from "@/interfaces/interfaces";
import { api } from "./api";

export async function RegisterRequest(data: ILoginRequest) {
    const response = await api.post('/users', data)
    return response
}