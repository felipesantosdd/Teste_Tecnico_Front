import { api } from "./api";

export async function getBalancesRequest() {

    const token = localStorage.getItem('token');

    const response = await api
        .get('/balances', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: any) => {
            return response
        })
    return response

}
