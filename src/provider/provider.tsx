import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../components/alert/errorAlert";
import { SuccessAlert } from "../components/alert/successAlert";
import { ClientType, ContextProps, LoginResponse, NewContractType, NewProductType, ProductsType, ProviderType, UserDataType } from "../interfaces/interfaces";
import { LoginData } from "../interfaces/interfaces";
import { getProducts } from "../services/Products/getProducts";
import { getMySelf } from "../services/Acounts/getUser";
import { login } from "../services/login";
import { newContract } from "../services/Contracts/newContract";
import { newProduct } from "../services/Products/newProduct";
import { getClients } from "../services/Clients/getClients";



export const Context = createContext<ContextProps>({} as ContextProps)


export function Provider({ children }: ProviderType) {

    const navigate = useNavigate()


    const buttons: any = [
        {
            name: 'Noivas',
            icon: 'https:cdn-icons-png.flaticon.com/512/3074/3074076.png',
            onClick: () => {
                handleGetProducts()
            }
        },
        {
            name: 'Noivos',
            icon: 'https:cdn-icons-png.flaticon.com/512/3074/3074081.png',
            onClick: () => {
                alert('Contratos')
            }
        },

        {
            name: 'Madrinhas',
            icon: 'https:cdn-icons-png.flaticon.com/512/6872/6872365.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Daminhas',
            icon: 'https:cdn-icons-png.flaticon.com/512/3371/3371945.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Debutantes',
            icon: 'https:cdn-icons-png.flaticon.com/512/3371/3371956.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Acessorios',
            icon: 'https:cdn-icons-png.flaticon.com/512/9249/9249874.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Calçados',
            icon: 'https:cdn-icons-png.flaticon.com/512/1940/1940988.png',
            onClick: () => {
                alert('Contratos')
            }
        },

        {
            name: 'Novo Cliente',
            icon: 'https:cdn-icons-png.flaticon.com/512/6009/6009864.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Contratos',
            icon: 'https:cdn-icons-png.flaticon.com/512/3374/3374620.png',
            onClick: () => {
                alert('Contratos')
            }
        },
        {
            name: 'Funcionarios',
            icon: 'https:cdn-icons-png.flaticon.com/512/554/554857.png',
            onClick: () => {
                alert('Usuarios')
            }
        },
    ];

    const [page, setPage] = useState<string>('products')

    const [userData, setUserData] = useState<UserDataType>();

    const [products, setProducts] = useState<ProductsType[]>([]);

    const [carr, setCarr] = useState<ProductsType[]>([])

    const [clients, setClients] = useState<ClientType[]>([])

    async function handleLogin(data: LoginData) {
        try {
            const response: LoginResponse = await login(data);
            console.log(response)
            localStorage.setItem("authToken", response.access)
            navigate("/dashboard")
            getLogedUser()

        } catch (error: any) {
            console.error(error.response.data);
            ErrorAlert("Usuario ou Senha invalidos")
        }
    }

    async function getLogedUser() {
        try {
            const response: UserDataType = await getMySelf()
            setUserData(response)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleGetProducts(): Promise<void> {
        try {
            const response = await getProducts();
            setProducts(response);
        } catch (error: any) {
            console.error(error.response.data);
        }
    }

    async function handleAddProducts(data: NewProductType): Promise<void> {
        try {
            const response = await newProduct(data);

            handleGetProducts()
            SuccessAlert("Produto Adicionado com sucesso")
        } catch (error: any) {
            const erro = error.response.data

            if (error[0]) {
                console.error(erro[0])
                ErrorAlert(erro[0])
            } else if (erro.name
            ) {
                ErrorAlert(`O nome do produto não foi fornecido.`)
                console.error(`O nome do produto não foi fornecido.`)
            } else if (erro.color) {
                ErrorAlert('A Cor do produto não foi fornecida')
                console.error('A Cor do produto não foi fornecida')
            } else if (erro.type
            ) {
                ErrorAlert('A categoria dp produto não foi fornecida')
                console.error('A categoria dp produto não foi fornecida')
            } else if (erro.messages) {
                ErrorAlert('Token de acesso expirado, faça login novamente')
                console.error('Token de acesso expirado, faça login novamente')
            }
        }
    }

    async function handleNewContract(data: NewContractType): Promise<void> {
        try {
            console.log(data)
            const response = await newContract(data);
            console.log(response)
        } catch (error: any) {
            const erro = error.response.data
            console.error(erro)


            if (error[0]) {
                console.error(erro[0])
            } else if (erro.contract_number) {
                ErrorAlert(`O numero do contrato não foi fornecido.`)
                console.error(`O numero do contrato não foi fornecido.`)
            } else if (erro.return_date) {
                ErrorAlert('A data de remoção dos produtos não foi fornecida')
                console.error('A data de remoção dos produtos não foi fornecida')
            } else if (erro.removal_date) {
                ErrorAlert('A data de retorno dos produtos não foi fornecida')
                console.error('A data de retorno dos produtos não foi fornecida')
            } else if (erro.messages) {
                ErrorAlert('Token de acesso expirado, faça login novamente')
                console.error('Token de acesso expirado, faça login novamente')
            }
        }
    }


    async function handleGetClients() {
        try {
            const response = await getClients()
            setClients(response)
        } catch (error: any) {
            console.error(error.response.data);
            ErrorAlert("Usuario ou Senha invalidos")
        }
    }

    function logout() {
        localStorage.clear()
        navigate("/login")
    }


    return (
        <>
            <Context.Provider value={{
                userData,
                setUserData,
                handleLogin,
                page,
                setPage,
                handleGetProducts,
                buttons,
                products,
                setProducts,
                carr,
                setCarr,
                handleAddProducts,
                handleNewContract,
                logout,
                clients,
                setClients,
                handleGetClients,
            }}>
                {children}
            </Context.Provider>
        </>
    )
}