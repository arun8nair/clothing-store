import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import './pages/Signin-Signup';
import {setCurrentUser} from './redux/user/userActions';
import SignInAndSignUpPage from './pages/Signin-Signup';

const HatsPage = () => {
    return (
        <div>
            Hats Page
        </div>
    )
}

class App extends React.Component {

    unsubscribeFromAuth = null;
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                this.unsubscribeFromSnapshot = userRef.onSnapshot(snapShot => {
                    console.log(snapShot.data());
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                });
            } else {
                setCurrentUser(userAuth)
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
              <Header />
              <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/shop/hats" component={HatsPage} />
                    <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> } />
              </Switch>
          </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
