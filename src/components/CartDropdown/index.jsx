import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import { toggleCartHidden } from "../../redux/cart/cartActions";

import './CartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
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
            dispatch(toggleCartHidden());
        }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));