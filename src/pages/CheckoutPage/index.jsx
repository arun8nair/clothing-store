import React, { useContext } from 'react';
import { CartContext } from "../../providers/cart/CartProvider";
import CheckoutItem from "../../components/CheckoutItem";

import './CheckoutPage.scss';

const Checkout = ({total}) => {

    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>  <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">
                <span>TOTAL: 
                    ${cartTotal}
                </span>
            </div>
        </div>
    )
}


export default Checkout;