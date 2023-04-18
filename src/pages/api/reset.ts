import { ILoginRequest } from "@/interfaces/interfaces";
import { api } from "./api";

export async function resetPasswordRequest(token: string, password: string) {
    const response = await api.patch(`/users/reset-password/${token}`, { password: password })
    return response
}