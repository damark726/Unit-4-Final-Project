import React, {Component} from "react";
import {Link} from "react-router-dom";
//=====================================================================================================================================
export default class SingleAnimeFavorites extends Component {
  constructor() {
    super();
    this.state = {};
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/anime/${this.props.match.params.apiid}`)
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
//=====================================================================================================================================
  renderTitles() {
    if (this.state.singleAnime.attributes.titles.en) {
      return <div className="title">{this.state.singleAnime.attributes.titles.en}</div>
    } else if (this.state.singleAnime.attributes.titles.en_jp) {
      return <div className="title">{this.state.singleAnime.attributes.titles.en_jp}</div>
    } else {
      return <div className="title">{this.state.singleAnime.attributes.titles.ja_jp}</div>
    }
  }
//=====================================================================================================================================
  render() {
    return(
      <div className="SingleAnimeFavorites">
        <Link to="/favorites">Back to Favorites</Link><br />
        <Link to={`/favorites/anime/${this.props.match.params.dbid}/${this.props.match.params.apiid}/edit`}>Edit</Link>
        {this.state.singleAnime ? this.renderTitles() : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
