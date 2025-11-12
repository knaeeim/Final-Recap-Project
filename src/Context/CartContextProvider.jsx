import React, { useState } from 'react';
import { CartContext } from './createContext';

const CartContextProvider = ({children}) => {
    const [carts, setCarts] = useState([]); 

    const handleCartProducts = (product) => {
        setCarts((prev) => {
            const exists = prev.some((prod) => prod.id === product.id); 

            if(exists){
                return prev.map((prod) => prod.id === product.id ? {...prod, cartQuantity : (prod.cartQuantity + 1 || 0)} : prod)
            }
            else{
                return [...prev, {...product, cartQuantity : 1}]
            }
        });
    }

    const cartContext = {
        carts, 
        setCarts, 
        handleCartProducts
    }

    return (
        <CartContext value={cartContext}>
            {children}
        </CartContext>
    );
};

export default CartContextProvider;