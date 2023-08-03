'use client';

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [cart, setCart] = useState([])

    const addToCart = (id, image, name, price, additionalTopping, size, crust) => {
        console.log(id, image, name, price, additionalTopping, size, crust)

        additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

        const newItem = {
            id, image, name, price, additionalTopping, size, crust, amount: 1,
        };
        
        setCart([...cart, newItem]);
    }
    return (
        <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
