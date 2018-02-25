import React, {Component} from "react";
import {Link} from "react-router-dom";

class MangaHome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://kitsu.io/api/edge/manga?sort=popularityRank&page%5Blimit%5D=20")
    .then(data => data.json())
    .then(data => {
      let divId = 1
      const mangas = data.data.map((manga, index) => {
        return (
          <div
            key={manga.id}
            className="MostPopularMangas"
            id={`manga${divId++}`}>
              <Link to={`/manga/${manga.id}`}>{manga.attributes.titles.en ? manga.attributes.titles.en : manga.attributes.titles.en_jp}</Link>
          </div>
        )
      });
      this.setState({
        mostPopularMangas: mangas
      });
    });
  }

  render() {
    return (
      <div className="MangaHome">
        {this.state.mostPopularMangas ? this.state.mostPopularMangas : ""}
      </div>
    )
  }
}

export default MangaHome;