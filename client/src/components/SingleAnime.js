import React, {Component} from "react";
import {Link} from "react-router-dom";

class SingleAnime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let animeId = Number(this.props.match.params.id);
    fetch(`https://kitsu.io/api/edge/anime/${animeId}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        singleAnime: data.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  renderTitles() {
    if (this.state.singleAnime.attributes.titles.en) {
      return <div className="title">{this.state.singleAnime.attributes.titles.en}</div>
    } else if (this.state.singleAnime.attributes.titles.en === null) {
      return <div className="title">{this.state.singleAnime.attributes.titles.en_jp}</div>
    }
  }

  render() {
    return(
      <div className="SingleAnime">
        <Link to="/anime">Back to All Animes</Link>
        <Link to="/manga">Manga</Link>
        {this.state.singleAnime ? this.renderTitles() : ""}
      </div>
    )
  }
}

export default SingleAnime;
