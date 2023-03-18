import { NewContractType, ContractType } from "../../interfaces/interfaces";
import { api } from "../api";

export async function newContract(dataContract: NewContractType): Promise<ContractType | any> {

    const token = localStorage.getItem("authToken")
    const response = await api.post('contracts/', dataContract, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data
}
