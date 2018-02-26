import React, {Component} from "react";
import {Link} from "react-router-dom";
//=====================================================================================================================================
export default class AnimeHome extends Component {
  constructor() {
    super();
    this.state = {};
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch("https://kitsu.io/api/edge/anime?sort=popularityRank&page%5Blimit%5D=20")
    .then(data => data.json())
    .then(data => {
      let divId = 1
      const animes = data.data.map((anime, index) => {
        return (
          <div
            key={anime.id}
            className="MostPopularAnimes"
            id={`anime${divId++}`}>
              <Link to={`/anime/${anime.id}`}>{anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp}</Link>
          </div>
        )
      });
      this.setState({
        mostPopularAnimes: animes
      });
    });
  }
//=====================================================================================================================================
  render() {
    return (
      <div className="AnimeHome">
        {this.state.mostPopularAnimes ? this.state.mostPopularAnimes : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
