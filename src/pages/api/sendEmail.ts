import { ILoginRequest } from "@/interfaces/interfaces";
import { api } from "./api";

export async function sendEmailToResetRequest(data: string) {
    const response = await api.post('/users/reset-email-password', data)
    return response
}