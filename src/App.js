import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
import "./pages/Signin-Signup";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";
import SignInAndSignUpPage from "./pages/Signin-Signup";

class App extends React.Component {
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
