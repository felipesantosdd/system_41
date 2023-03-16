import React from 'react';
import { OranienbaumH2 } from '../fonts/Oranienbaum/Oranienbaum.font';
import './styles.css';

export function ProductCard() {

    return (

        <div className="card">
            <img className='img' src="https://i.pinimg.com/736x/02/d6/3a/02d63a5b62e5a9ced750b5db119f5e5b--asuna-cosplay-cosplay-sword.jpg" alt="" />
            <div className="textBox">
                <OranienbaumH2>Product Name</OranienbaumH2>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>

            </div>
        </div>

    )
}