import React, {Component} from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AnimeHome from "./components/AnimeHome";
import MangaHome from "./components/MangaHome";
import SingleAnime from "./components/SingleAnime";
import SingleManga from "./components/SingleManga";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/anime" component={AnimeHome} />
          <Route exact path="/manga" component={MangaHome} />
          <Route exact path="/anime/:id" component={SingleAnime} />
          <Route exact path="/manga/:id" component={SingleManga} />
          <Footer/>
        </div>
    );
  }
}

export default App;
