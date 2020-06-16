import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import {CartContext} from "../../providers/cart/CartProvider";
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import { toggleCartHidden } from "../../redux/cart/cartActions";

import './CartDropdown.scss';

const CartDropdown = ({history}) => {
    const {cartItems, toggleHidden} = useContext(CartContext);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length === 0 ?
                    <span className="empty-message">Your cart is empty</span> :
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                toggleHidden();
            }
                }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown);