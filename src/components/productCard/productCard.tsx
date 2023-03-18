import React, { useContext } from 'react';
import { ProductCardProps } from '../../interfaces/interfaces';
import { OranienbaumH2 } from '../fonts/Oranienbaum/Oranienbaum.font';
import './styles.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Context } from '../../provider/provider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InfoProduct from '../modal/productInfo';

export function ProductCard({ id, name, type, color, value, image }: ProductCardProps) {

    const { carr, setCarr, products } = useContext(Context)

    function addToCarr(key: string) {
        const newCarr: any = carr
        const product = products?.find((p) => p.id === key)
        newCarr.push(product)

        setCarr(newCarr)
    }



    return (

        <div className="card" key={id}>
            <img className='img' src={`http://127.0.0.1:8000${image}`} alt={image} />

            <div className="textBox">
                <OranienbaumH2>{`${type} ${color}`}</OranienbaumH2>
                <span>{name}</span>
                <p className="text price">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                <Stack direction="row" spacing={2}>
                    <InfoProduct id={id}></InfoProduct>
                    <Button variant="contained" onClick={() => {
                        addToCarr(id)
                    }}><AddShoppingCartIcon /></Button>
                </Stack>


            </div>

        </div>

    )
}