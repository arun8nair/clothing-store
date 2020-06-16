import React, {useState, useEffect, createContext} from 'react';
import {addItemToCart, removeItemFromCart, filterItemsFromCart, getCartItemsCount, getCartTotal} from './cartUtils';

export const CartContext = createContext({
    cartItems: [],
    hidden: true,
    cartItemsCount: 0,
    cartTotal: 0,
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {}
})

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const toggleHidden = () => setHidden(!hidden);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemsFromCart(cartItems, item));

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider 
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;