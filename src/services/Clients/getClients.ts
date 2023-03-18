import { api } from "../api"
import { ClientType } from "../../interfaces/interfaces"


export async function getClients(): Promise<ClientType[]> {
    const token = localStorage.getItem("authToken")
    const response = await api
        .get('clients/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    return response.data
}