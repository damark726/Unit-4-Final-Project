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
    fetch("https://kitsu.io/api/edge/anime?sort=popularityRank")
    .then(data => data.json())
    .then(data => {
      let divId = 1
      const animes = data.data.map((anime, index) => {
        return (
          <div
            key={anime.id}
            className="MostPopularAnimes"
            id={`anime${divId++}`}>
              <img alt="" src={anime.attributes.posterImage.tiny}/>
              <div className="anime-link-div"><Link to={`/anime/${anime.id}`}>{anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp}</Link></div>
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
        <div id="most-popular-animes-title">Most Popular Anime</div>
        {this.state.mostPopularAnimes ? this.state.mostPopularAnimes : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
