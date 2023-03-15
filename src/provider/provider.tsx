import { createContext, useState } from "react";
import { ContextProps, LoginResponse, ProviderType, UserData } from "../interfaces/interfaces";
import { LoginData } from "../interfaces/interfaces";
import { getMySelf } from "../services/getUser";
import { login } from "../services/login";



export const Context = createContext<ContextProps>({} as ContextProps)


export function Provider({ children }: ProviderType) {
    const [userData, setUserData] = useState<UserData | null>(null);

    async function handleLogin(data: LoginData) {
        try {
            const response: LoginResponse = await login(data);
            localStorage.setItem("authToken", response.access)
            getLogedUser()
        } catch (error) {
            console.error(error);
        }
    }

    async function getLogedUser() {
        try {
            const response: UserData = await getMySelf()
            setUserData(response)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <>
            <Context.Provider value={{
                userData, setUserData, handleLogin,
            }}>
                {children}
            </Context.Provider>
        </>
    )
}