import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux"; 
import store from "./store";
import jwt_decode from "jwt-decode";

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfil } from "./actions/profilActions";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import './style/App.css';

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from './Containers/Home';
import Login from './Containers/Login';
import Register from './Containers/Register';
import AddPlat from './Containers/AddPlat';
import Dashboard from "./Containers/Dashboard"
import CreateProfil from './Containers/CreateProfil';
import EditProfil from './Containers/EditProfil';
import InfoPlat from './Containers/InfoPlat';
import CarteRestaurant from './Containers/CarteRestaurant';
import CarteInfo from './Containers/CarteInfo';
import cardShop from './Containers/CardShop';


if(localStorage.jwtToken) {
  // console.log(localStorage.jwtToken);
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  //expired token
  const currentTime = Date.now() /1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfil());
    window.location.href = "/login"
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="body">
            <NavBar />
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/add" component={AddPlat} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create-profil" component={CreateProfil} />
                <Route exact path="/edit-profil" component={EditProfil} />
                <Route exact path="/info-plat/:id" component={InfoPlat} />
                <Route exact path="/carte-restaurant/" component={CarteRestaurant} />
                <Route exact path="/carte/:choice" component={CarteInfo} />
                <Route exact path="/card-shop/" component={cardShop} />
              </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
