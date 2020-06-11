import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/HomePage';

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
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop/hats" component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
