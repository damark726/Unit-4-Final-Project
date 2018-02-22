import React, {Component} from "react";
import {Link} from "react-router-dom";

class SingleManga extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderTitles = this.renderTitles.bind(this);
  }

  componentDidMount() {
    let mangaId = Number(this.props.match.params.id);
    fetch(`https://kitsu.io/api/edge/manga/${mangaId}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        singleManga: data.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  renderTitles() {
    if (this.state.singleManga.attributes.titles.en) {
      return <div className="title">{this.state.singleManga.attributes.titles.en}</div>
    } else if (this.state.singleManga.attributes.titles.en === null) {
      return <div className="title">{this.state.singleManga.attributes.titles.en_jp}</div>
    }
  }

  render() {
    return(
      <div className="SingleManga">
        <Link to="/manga">Back to All Mangas</Link>
        <Link to="/anime">Anime</Link>
        {this.state.singleManga ? this.renderTitles() : ""}
      </div>
    )
  }
}

export default SingleManga;
