import { ProductsType } from "../../interfaces/interfaces";
import { api } from "../api";

export async function getProducts(): Promise<ProductsType[]> {
    try {
        // const token = localStorage.getItem("authToken")
        const response = await api.get('products');
        if (response.data) {
            return response.data
        } else {
            throw new Error('A resposta da API não contém dados.');
        }
    } catch (error) {
        console.error('Ocorreu um erro durante a solicitação de login:', error);
        throw error;
    }
}
