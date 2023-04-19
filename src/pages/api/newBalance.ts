import { api } from "./api";

export async function newBalancesRequest(file: any) {

    const token = localStorage.getItem('token');

    const form = new FormData();
    form.append('file', file);

    const response = await api
        .post('/balances/import', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: file
        })
        .then((response: any) => {
            return response
        })
    return response

}
