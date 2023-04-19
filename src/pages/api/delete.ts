import { api } from "./api";

export async function deleteBalancesRequest(id: string) {

    const token = localStorage.getItem('token');

    const response = await api
        .delete(`/balances/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: any) => {
            return response
        })
    return response

}
