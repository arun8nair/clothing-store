import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import { useContext } from "react";
import CurrentUserContext from '../../contexts/currentUser/CurrentUserContext';
import {CartContext} from "../../providers/cart/CartProvider";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import './Header.scss';

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    // const [hidden, setHidden] = useState(true);
    const {hidden} = useContext(CartContext)
    // const toggleHidden = () => setHidden(!hidden); 
    return (
        <div className="header">
            <Link to="" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="" className="option">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                )}
            {/* <CartContext.Provider value={{hidden, toggleHidden}}> */}
                <CartIcon />
            {/* </CartContext.Provider> */}
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
            }

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);