import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
        
      </Switch>
    </div>
  );
}

export default App;
