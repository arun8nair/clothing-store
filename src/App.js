import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
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

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            console.log("User", user)
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
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
