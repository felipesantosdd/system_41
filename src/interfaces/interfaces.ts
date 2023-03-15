import { ReactNode } from 'react';


export interface BodyProps {
    children: ReactNode;
}


export interface LoginData {
    username: string;
    password: string;

}

export interface LoginResponse {
    access: string;
    refresh: string;
}

export interface UserData {
    username: string;
    id: number;
}


export interface ContextProps {
    userData: UserData | null;
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
    handleLogin: (data: LoginData) => Promise<void>;
}

export interface ProviderType {
    children: ReactNode;
}
