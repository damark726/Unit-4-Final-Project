import React, {Component} from "react";
import {Link} from "react-router-dom";
//=====================================================================================================================================
export default class SingleMangaFavorites extends Component {
  constructor() {
    super();
    this.state = {};
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/manga/${this.props.match.params.apiid}`)
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
//=====================================================================================================================================
  renderTitles() {
    if (this.state.singleManga.attributes.titles.en) {
      return <div className="title">{this.state.singleManga.attributes.titles.en}</div>
    } else if (this.state.singleManga.attributes.titles.en_jp) {
      return <div className="title">{this.state.singleManga.attributes.titles.en_jp}</div>
    } else {
      return <div className="title">{this.state.singleManga.attributes.titles.ja_jp}</div>
    }
  }
//=====================================================================================================================================
  render() {
    return(
      <div className="SingleMangaFavorites">
        <Link to="/favorites">Back to Favorites</Link><br />
        <Link to={`/favorites/manga/${this.props.match.params.dbid}/${this.props.match.params.apiid}/edit`}>Edit</Link>
        {this.state.singleManga ? this.renderTitles() : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
