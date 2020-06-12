import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCurrentUser} from '../../redux/user/userSelectors';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import './Header.scss';

const Header = ({currentUser, hidden}) => (
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
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);