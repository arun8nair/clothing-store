import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import './pages/Signin-Signup';
import SignInAndSignUpPage from './pages/Signin-Signup';

const HatsPage = () => {
    return (
        <div>
            Hats Page
        </div>
    )
}

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
                    console.log("currentUser", this.state.currentUser)
                });
            } else {
                this.setState({ currentUser: userAuth })
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
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/shop" component={ShopPage} />
                  <Route exact path="/shop/hats" component={HatsPage} />
                  <Route exact path="/signin" component={SignInAndSignUpPage} />
              </Switch>
          </div>
        );
    }
}

export default App;
