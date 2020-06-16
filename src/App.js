import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import './pages/Signin-Signup';
import CurrentUserContext from "./contexts/currentUser/CurrentUserContext";
import SignInAndSignUpPage from './pages/Signin-Signup';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                this.unsubscribeFromSnapshot = userRef.onSnapshot(snapShot => {
                    console.log(snapShot.data());
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                });
            } else {
                this.setState({currentUser :userAuth})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        this.unsubscribeFromSnapshot();
    }

    render() {
        return (
            <div className="App">
                <CurrentUserContext.Provider value={this.state.currentUser}>
                    <Header />
                </CurrentUserContext.Provider>
                <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckoutPage} />
                        <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> } />
                </Switch>
            </div>
        );
    }
}

export default App;
