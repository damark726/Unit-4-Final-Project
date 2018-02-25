import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./components/Home";
import AnimeHome from "./components/AnimeHome";
import MangaHome from "./components/MangaHome";
import SingleAnime from "./components/SingleAnime";
import SingleManga from "./components/SingleManga";
import FavoritesList from "./components/FavoritesList";
import AddFavorite from "./components/AddFavorite";
import Footer from "./components/Footer";
import "./App.css";
//========================================================================================================================================
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/anime/:id" component={SingleAnime} />
            <Route path="/manga/:id" component={SingleManga} />
            <Route path="/anime" component={AnimeHome} />
            <Route path="/manga" component={MangaHome} />
            <Route path="/favorites/add" component={AddFavorite}/>
            <Route path="/favorites" component={FavoritesList} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
