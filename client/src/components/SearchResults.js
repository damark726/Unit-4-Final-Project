import React, {Component} from "react";
import SingleAnimeSearchResult from "./SingleAnimeSearchResult";
import SingleMangaSearchResult from "./SingleMangaSearchResult";
//=====================================================================================================================================
export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      title: this.props.title,
      seriesType: this.props.seriesType,
      offset: 0
    }
  }
//=====================================================================================================================================
  renderResults() {
    let divId = 1
    return this.state.results.data.map(manganime => {
      return (
        <div
          key={manganime.id}
          className="SearchResultItem"
          id={`manganime${divId++}`}
          onClick={() => this.handleClick(manganime.type, manganime.id)}>
          <img src={manganime.attributes.posterImage.tiny} alt="" />
          <div>
            {manganime.attributes.titles.en_us ? manganime.attributes.titles.en_us : ""}
            {!manganime.attributes.titles.en_us && manganime.attributes.titles.en ? manganime.attributes.titles.en : ""}
            {!manganime.attributes.titles.en && manganime.attributes.titles.en_jp ? manganime.attributes.titles.en_jp : ""}
            {!manganime.attributes.titles.en_jp && manganime.attributes.titles.ja_jp ? manganime.attributes.titles.ja_jp : ""}
            {manganime.attributes.titles.en_cn ? manganime.attributes.titles.en_cn : ""}
            {!manganime.attributes.titles.en_cn && manganime.attributes.titles.zh_cn ? manganime.attributes.titles.zh_cn : ""}
            {manganime.attributes.titles.en_kr ? manganime.attributes.titles.en_kr : ""}
            {!manganime.attributes.titles.en_kr && manganime.attributes.titles.ko_kr ? manganime.attributes.titles.ko_kr : ""}
          </div>
        </div>)
    });
  }
//=====================================================================================================================================
  renderResultsNext() {
    let divId = 1
    return this.state.resultsNext.map(manganime => {
      return (
        <div
          key={manganime.id}
          className="SearchResultItem"
          id={`manganime${divId++}`}
          onClick={() => this.handleClick(manganime.type, manganime.id)}>
          <img src={manganime.attributes.posterImage.tiny} alt="" />
          <div>
            {manganime.attributes.titles.en_us ? manganime.attributes.titles.en_us : ""}
            {!manganime.attributes.titles.en_us && manganime.attributes.titles.en ? manganime.attributes.titles.en : ""}
            {!manganime.attributes.titles.en && manganime.attributes.titles.en_jp ? manganime.attributes.titles.en_jp : ""}
            {!manganime.attributes.titles.en_jp && manganime.attributes.titles.ja_jp ? manganime.attributes.titles.ja_jp : ""}
            {manganime.attributes.titles.en_cn ? manganime.attributes.titles.en_cn : ""}
            {!manganime.attributes.titles.en_cn && manganime.attributes.titles.zh_cn ? manganime.attributes.titles.zh_cn : ""}
            {manganime.attributes.titles.en_kr ? manganime.attributes.titles.en_kr : ""}
            {!manganime.attributes.titles.en_kr && manganime.attributes.titles.ko_kr ? manganime.attributes.titles.ko_kr : ""}
          </div>
        </div>)
    });
  }
//=====================================================================================================================================
  handleClick(type, id) {
    fetch(`https://kitsu.io/api/edge/${type}/${id}`)
    .then(data => data.json())
    .then(data => {
      if (type === "anime") {
        this.setState({
          results: false,
          resultsNext: false,
          anime: data
        })
      } else if (type === "manga") {
        this.setState({
          results: false,
          resultsNext: false,
          manga: data
        })
      }
    })
  }
//=====================================================================================================================================
  nextPage() {
    let pageNumber = this.state.offset + 20;
    fetch(`https://kitsu.io/api/edge/${this.state.seriesType}?filter%5Btext%5D=${this.state.title}&page%5Blimit%5D=20&page%5Boffset%5D=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        nextPage: true,
        resultsNext: data.data,
        results: false,
        offset: pageNumber
      })
    })
  }
//=====================================================================================================================================
  prevPage() {
    if (this.state.offset > 1) {
      let pageNumber = this.state.offset - 20;
      fetch(`https://kitsu.io/api/edge/${this.state.seriesType}?filter%5Btext%5D=${this.state.title}&page%5Blimit%5D=20&page%5Boffset%5D=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          nextPage: true,
          resultsNext: data.data,
          offset: pageNumber
        })
      })
    }
  }
//=====================================================================================================================================
  render() {
    return (
      <div className="SearchResults">
        {this.state.results || this.state.resultsNext ? <div id="offset">Offset: {this.state.offset}</div> : ""}
        {this.state.results ? this.renderResults() : ""}
        {this.state.resultsNext ? this.renderResultsNext() : ""}
        {this.state.results || this.state.resultsNext ? <input id="next" className="button" type="button" onClick={() => this.nextPage()} value="Next" /> : ""}
        {this.state.results || this.state.resultsNext ? <input id="previous" className="button" type="button" onClick={() => this.prevPage()} value="Previous" /> : ""}
        {this.state.anime ? <SingleAnimeSearchResult anime={this.state.anime} /> : ""}
        {this.state.manga ? <SingleMangaSearchResult manga={this.state.manga} /> : ""}
      </div>);
  }
}
//=====================================================================================================================================
