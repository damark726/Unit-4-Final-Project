import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
//=====================================================================================================================================
export default class SingleAnime extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge${this.props.match.url}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        singleAnime: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
//=====================================================================================================================================
  renderTitles() {
    if (this.state.singleAnime.attributes.titles.en_us) {
      return <span>{this.state.singleAnime.attributes.titles.en_us}</span>
    } else if (this.state.singleAnime.attributes.titles.en) {
      return <span>{this.state.singleAnime.attributes.titles.en}</span>
    } else if (this.state.singleAnime.attributes.titles.en_jp) {
      return <span>{this.state.singleAnime.attributes.titles.en_jp}</span>
    } else if (this.state.singleAnime.attributes.titles.en_kr) {
      return <span>{this.state.singleAnime.attributes.titles.en_kr}</span>
    } else if (this.state.singleAnime.attributes.titles.en_cn) {
      return <span>{this.state.singleAnime.attributes.titles.en_cn}</span>
    } else if (this.state.singleAnime.attributes.titles.ja_jp) {
      return <span>{this.state.singleAnime.attributes.titles.ja_jp}</span>
    } else if (this.state.singleAnime.attributes.titles.ko_kr) {
      return <span>{this.state.singleAnime.attributes.titles.ko_kr}</span>
    } else if (this.state.singleAnime.attributes.titles.zh_cn) {
      return <span>{this.state.singleAnime.attributes.titles.zh_cn}</span>
    }
  }

  renderTitlesForFavorties() {
    if (this.state.singleAnime.attributes.titles.en_us) {
      return this.state.singleAnime.attributes.titles.en_us
    } else if (this.state.singleAnime.attributes.titles.en) {
      return this.state.singleAnime.attributes.titles.en
    } else if (this.state.singleAnime.attributes.titles.en_jp) {
      return this.state.singleAnime.attributes.titles.en_jp
    } else if (this.state.singleAnime.attributes.titles.en_kr) {
      return this.state.singleAnime.attributes.titles.en_kr
    } else if (this.state.singleAnime.attributes.titles.en_cn) {
      return this.state.singleAnime.attributes.titles.en_cn
    } else if (this.state.singleAnime.attributes.titles.ja_jp) {
      return this.state.singleAnime.attributes.titles.ja_jp
    } else if (this.state.singleAnime.attributes.titles.ko_kr) {
      return this.state.singleAnime.attributes.titles.ko_kr
    } else if (this.state.singleAnime.attributes.titles.zh_cn) {
      return this.state.singleAnime.attributes.titles.zh_cn
    }
  }
//=====================================================================================================================================
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Episodes Watched" name="episodes_watched" min="0" max={this.state.singleAnime.attributes.episodeCount} onChange={this.handleChange} required />
        <input type="text" placeholder="Status" name="status" onChange={this.handleChange} required />
        <input type="number" placeholder="Rating (1-10)" name="rating" min="1" max="10" onChange={this.handleChange} required />
        <input className="submit" type="submit" value="Add to Favorites" />
      </form>
    )
  }
//=====================================================================================================================================
  renderInfo() {
    return(
      <div className="info">
        <div className="info-divs">Show Type: {this.state.singleAnime.attributes.showType}</div>
        <div className="info-divs">Status: {this.state.singleAnime.attributes.status}</div>
        <div className="info-divs">Total Episodes: {this.state.singleAnime.attributes.episodeCount}</div>
        <div className="info-divs">Episodes Length: {this.state.singleAnime.attributes.episodeLength} mins</div>
        <div className="info-divs">Average Rating: {this.state.singleAnime.attributes.averageRating}</div>
        <div className="info-divs">Rating Rank: {this.state.singleAnime.attributes.ratingRank}</div>
        <div className="info-divs">Popularity Rank: {this.state.singleAnime.attributes.popularityRank}</div>
        <div className="info-divs">Start Date: {this.state.singleAnime.attributes.startDate}</div>
        <div className="info-divs">End Date: {this.state.singleAnime.attributes.endDate}</div>
      </div>
    )
  }
//=====================================================================================================================================
  shouldComponentUpdate() {
    if (this.state.genres) {
      return false
    } else {
      return true
    }
  }

  componentDidUpdate() {
    let divId = 1;
    fetch(this.state.singleAnime.relationships.genres.links.related)
    .then(data => data.json())
    .then(data => {
      const genres = data.data.map(genre => {
        return(
          <div key={genre.id} className="genres" id={`genre${divId++}`}>
            {genre.attributes.name}
          </div>)
      })
      this.setState({
        genres: genres
      })
    })
  }
//=====================================================================================================================================
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/favorites',
      data: {
        title: this.renderTitlesForFavorties(),
        series_type: this.state.singleAnime.type,
        url: this.state.singleAnime.links.self,
        episodes_watched: this.state.episodes_watched,
        chapters_read: null,
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
      <div className="SingleAnime">
        {this.state.singleAnime ? <img className="cover-image" alt="" src={this.state.singleAnime.attributes.coverImage.large} /> : ""}
        {this.state.singleAnime ? <div className="title">{this.renderTitles()}</div> : ""}
        {this.state.singleAnime ? <div className="poster-image"><img alt="" src={this.state.singleAnime.attributes.posterImage.small} /></div> : ""}
        {this.state.singleAnime ? this.renderForm(): ""}
        {this.state.singleAnime ? <div className="synopsis"><span>Synopsis</span>{this.state.singleAnime.attributes.synopsis}</div> : ""}
        {this.state.singleAnime ? <div className="info-title">Additional Information</div> : ""}
        {this.state.singleAnime ? this.renderInfo() : ""}
        <div className="genres-title">Genres:</div>
        <div className="genres-div">{this.state.genres ? this.state.genres : ""}</div>
        {this.state.fireRedirect ? <Redirect push to="/favorites" /> : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
