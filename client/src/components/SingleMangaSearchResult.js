import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
//=====================================================================================================================================
export default class SingleMangaSearchResult extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
//=====================================================================================================================================
  componentDidMount() {
    fetch(`https://kitsu.io/api/edge/${this.props.manga.data.type}/${this.props.manga.data.id}`)
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
  correctTitleForFaveoritesAdd() {
    if (this.state.singleManga.attributes.titles.en) {
      return this.state.singleManga.attributes.titles.en
    } else if (this.state.singleManga.attributes.titles.en_jp) {
      return this.state.singleManga.attributes.titles.en_jp
    } else {
      return this.state.singleManga.attributes.titles.ja_jp
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
        series_type: this.state.singleManga.type,
        url: this.state.singleManga.links.self,
        episodes_watched: 0,
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
      <div className="SingleMangaSearchResult">
        <Link to="/manga">Back to Manga</Link>
        <Link to="/anime">Anime</Link>
        {this.state.singleManga ? this.renderTitles() : ""}

        <form onSubmit={this.handleSubmit}>
          <input type="number" placeholder="Chapters Read" name="chapters_read" onChange={this.handleChange} />
          <input type="text" placeholder="Status" name="status" onChange={this.handleChange} />
          <input type="number" placeholder="Rating (1-10)" name="rating" onChange={this.handleChange} />
          <input type="submit" value="Add to Favorites"/>
        </form>
      </div>
    )
  }
}
//=====================================================================================================================================
