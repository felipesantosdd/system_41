import { LoginResponse } from './../interfaces/interfaces';
import { LoginData } from "../interfaces/interfaces";
import { api } from "./api";

export async function login(data: LoginData): Promise<LoginResponse> {
    try {
        const response = await api
            .post<LoginResponse>('accounts/login/', data);
        if (response.data) {
            return response.data;
        } else {
            throw new Error('A resposta da API não contém dados.');
        }
    } catch (error) {
        console.error('Ocorreu um erro durante a solicitação de login:', error);
        throw error;
    }
}
