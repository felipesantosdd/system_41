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

export interface UserDataType {
    username: string;
    id: number;
}


export interface ContextProps {
    userData: UserDataType | undefined;
    setUserData: React.Dispatch<React.SetStateAction<UserDataType | undefined>>
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
    buttons: buttonsType[];
    products: ProductsType[] | undefined;
    setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
    carr: ProductsType[] | undefined;
    setCarr: React.Dispatch<React.SetStateAction<ProductsType[]>>;
    clients: ClientType[];
    setClients: React.Dispatch<React.SetStateAction<ClientType[]>>;
    handleLogin: (data: LoginData) => Promise<void>;
    handleGetProducts: () => Promise<void>;
    handleAddProducts(data: NewProductType): Promise<void>;
    handleNewContract: (data: NewContractType) => Promise<void>;
    handleGetClients(): Promise<void>;
    logout(): void;
}

export interface ProviderType {
    children: ReactNode;
}

export interface ProductsType {
    id: string,
    name: string,
    type: string,
    color: string,
    value: number,
    image?: string | undefined,
    flows?: FlowType[],
}

export interface NewProductType {
    name: string
    type: string
    color: string
    value: number,
    image?: string
}
export interface FlowType {
    id: string,
    removal_date: string,
    return_date: string
}
export interface ContractType {
    id: string;
    contract_number: string;
    removal_date: string;
    return_date: string;
    status: string;
    products: {
        id: string;
        name: string;
        value: number;
    }[];
}
export interface NewContractType {
    client_id: string;
    contract_number: string;
    removal_date: string;
    return_date: string;
    status: string;
    products: ProductInContractType[];
}

export interface ProductInContractType {
    id: string;
}

export interface AddressType {
    city: string;
    district: string;
    street: string;
    number: string;
    zip_code: string;
    reference: string | null;
}

export interface ClientType {
    id: string;
    name: string;
    whatsApp: string;
    cpf: string;
    rg: string;
    address: AddressType | null;
    contracts: ContractType[];
}

export interface buttonsType {
    name: string;
    icon: string;
    onClick: () => void;
}

export interface ProductCardProps {
    id: string;
    name: string;
    type: string;
    color: string;
    value: number;
    image?: string | undefined;
}


