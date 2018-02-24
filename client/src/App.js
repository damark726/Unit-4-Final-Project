import React, {Component} from "react";
import "./App.css";
import {Route} from "react-router-dom";
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

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/anime/:id" component={SingleAnime} />
          <Route exact path="/manga/:id" component={SingleManga} />
          <Route exact path="/anime" component={AnimeHome} />
          <Route exact path="/manga" component={MangaHome} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route exact path="/favorites/add" component={AddFavorite}/>
          <Route exact path="/" component={Home} />
          <Footer/>
        </div>
    );
  }
}

export default App;
