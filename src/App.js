import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/hats" component={HatsPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
