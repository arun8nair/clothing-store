import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { signOutStart } from "../../redux/user/userActions";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import "./Header.scss";

const Header = ({ currentUser, hidden, signOutStart }) => (
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
				<div className="option" onClick={signOutStart}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
