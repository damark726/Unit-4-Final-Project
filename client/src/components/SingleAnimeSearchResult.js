import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
//=====================================================================================================================================
export default class SingleAnimeSearchResult extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/${this.props.anime.data.type}/${this.props.anime.data.id}`)
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
  correctTitleForFaveoritesAdd() {
    if (this.state.singleAnime.attributes.titles.en) {
      return this.state.singleAnime.attributes.titles.en
    } else if (this.state.singleAnime.attributes.titles.en_jp) {
      return this.state.singleAnime.attributes.titles.en_jp
    } else {
      return this.state.singleAnime.attributes.titles.ja_jp
    }
  }
//=====================================================================================================================================
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/favorites',
      data: {
        title: this.correctTitleForFaveoritesAdd(),
        series_type: this.state.singleAnime.type,
        url: this.state.singleAnime.links.self,
        episodes_watched: this.state.episodes_watched,
        chapters_read: 0,
        status: this.state.status,
        rating: this.state.rating
      }
    }).then(() => {
      this.setState({
        fireRedirect: true
      })
    })
    .catch(err => console.log(err))
  }
//=====================================================================================================================================
  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
//=====================================================================================================================================
  render() {
    return(
      <div className="SingleAnimeSearchResult">
        <Link to="/anime">Back to Anime</Link>
        <Link to="/manga">Manga</Link>
        {this.state.singleAnime ? this.renderTitles() : ""}

        <form onSubmit={this.handleSubmit}>
          <input type="number" placeholder="Episodes Watched" name="episodes_watched" onChange={this.handleChange} />
          <input type="text" placeholder="Status" name="status" onChange={this.handleChange} />
          <input type="number" placeholder="Rating (1-10)" name="rating" onChange={this.handleChange} />
          <input type="submit" value="Add to Favorites"/>
        </form>
      </div>
    )
  }
}
//=====================================================================================================================================
