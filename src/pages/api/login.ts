import { ILoginRequest } from "@/interfaces/interfaces";
import { api } from "./api";

export async function loginRequest(data: ILoginRequest) {
    const response = await api.post('/auth', data)
    return response
}