import React, {Component} from "react";
import axios from "axios";
//=====================================================================================================================================
export default class SingleManga extends Component {
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
        singleManga: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
//=====================================================================================================================================
  renderTitles() {
    if (this.state.singleManga.attributes.titles.en_us) {
      return <span>{this.state.singleManga.attributes.titles.en_us}</span>
    } else if (this.state.singleManga.attributes.titles.en) {
      return <span>{this.state.singleManga.attributes.titles.en}</span>
    } else if (this.state.singleManga.attributes.titles.en_jp) {
      return <span>{this.state.singleManga.attributes.titles.en_jp}</span>
    } else if (this.state.singleManga.attributes.titles.en_kr) {
      return <span>{this.state.singleManga.attributes.titles.en_kr}</span>
    } else if (this.state.singleManga.attributes.titles.en_cn) {
      return <span>{this.state.singleManga.attributes.titles.en_cn}</span>
    } else if (this.state.singleManga.attributes.titles.ja_jp) {
      return <span>{this.state.singleManga.attributes.titles.ja_jp}</span>
    } else if (this.state.singleManga.attributes.titles.ko_kr) {
      return <span>{this.state.singleManga.attributes.titles.ko_kr}</span>
    } else if (this.state.singleManga.attributes.titles.zh_cn) {
      return <span>{this.state.singleManga.attributes.titles.zh_cn}</span>
    }
  }

  renderTitlesForFavorties() {
    if (this.state.singleManga.attributes.titles.en_us) {
      return this.state.singleManga.attributes.titles.en_us
    } else if (this.state.singleManga.attributes.titles.en) {
      return this.state.singleManga.attributes.titles.en
    } else if (this.state.singleManga.attributes.titles.en_jp) {
      return this.state.singleManga.attributes.titles.en_jp
    } else if (this.state.singleManga.attributes.titles.en_kr) {
      return this.state.singleManga.attributes.titles.en_kr
    } else if (this.state.singleManga.attributes.titles.en_cn) {
      return this.state.singleManga.attributes.titles.en_cn
    } else if (this.state.singleManga.attributes.titles.ja_jp) {
      return this.state.singleManga.attributes.titles.ja_jp
    } else if (this.state.singleManga.attributes.titles.ko_kr) {
      return this.state.singleManga.attributes.titles.ko_kr
    } else if (this.state.singleManga.attributes.titles.zh_cn) {
      return this.state.singleManga.attributes.titles.zh_cn
    }
  }
//=====================================================================================================================================
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Chapters Read" name="chapters_read" min="0" max={this.state.singleManga.attributes.chapterCount} onChange={this.handleChange} required />
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
        <div className="info-divs">Series Type: {this.state.singleManga.attributes.subtype}</div>
        <div className="info-divs">Status: {this.state.singleManga.attributes.status}</div>
        <div className="info-divs">Total Chapters: {this.state.singleManga.attributes.chapterCount ? this.state.singleManga.attributes.chapterCount : "Ongoing"}</div>
        <div className="info-divs">Total Volumes: {this.state.singleManga.attributes.volumeCount ? this.state.singleManga.attributes.volumeCount : "Ongoing"}</div>
        <div className="info-divs">Average Rating: {this.state.singleManga.attributes.averageRating}</div>
        <div className="info-divs">Rating Rank: {this.state.singleManga.attributes.ratingRank}</div>
        <div className="info-divs">Popularity Rank: {this.state.singleManga.attributes.popularityRank}</div>
        <div className="info-divs">Start Date: {this.state.singleManga.attributes.startDate}</div>
        <div className="info-divs">End Date: {this.state.singleManga.attributes.endDate ? this.state.singleManga.attributes.endDate : "Ongoing"}</div>
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
    fetch(this.state.singleManga.relationships.genres.links.related)
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
        series_type: this.state.singleManga.type,
        url: this.state.singleManga.links.self,
        episodes_watched: null,
        chapters_read: this.state.chapters_read,
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
      <div className="SingleManga">
        {this.state.singleManga ? <img className="cover-image" alt="" src={this.state.singleManga.attributes.coverImage.original} /> : ""}
        {this.state.singleManga ? <div className="title">{this.renderTitles()}</div> : ""}
        {this.state.singleManga ? <div className="poster-image"><img alt="" src={this.state.singleManga.attributes.posterImage.small} /></div> : ""}
        {this.state.singleManga ? this.renderForm(): ""}
        {this.state.singleManga ? <div className="synopsis"><span>Synopsis</span>{this.state.singleManga.attributes.synopsis}</div> : ""}
        {this.state.singleManga ? <div className="info-title">Additional Information</div> : ""}
        {this.state.singleManga ? this.renderInfo() : ""}
        <div className="genres-title">Genres:</div>
        <div className="genres-div">{this.state.genres ? this.state.genres : ""}</div>
      </div>
    )
  }
}
//=====================================================================================================================================
