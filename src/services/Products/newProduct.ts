import { NewProductType, ProductsType } from "../../interfaces/interfaces";
import { api } from "../api";

export async function newProduct(dataproduct: NewProductType): Promise<ProductsType | undefined> {
    const token = localStorage.getItem("authToken")
    const response = await api.post('products/', dataproduct, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    });
    return response.data
}

