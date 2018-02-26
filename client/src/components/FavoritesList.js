import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import FavoritesListItem from "./FavoritesListItem";
//========================================================================================================================================
export default class FavoritesList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
    this.renderFavoritesList = this.renderFavoritesList.bind(this);
  }
//========================================================================================================================================
  componentDidMount() {
    axios.get("/favorites")
    .then(res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
//========================================================================================================================================
  renderFavoritesList() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(manganime => {
        return(
          <FavoritesListItem key={manganime.id} data={manganime} />
        );
      });
    } else {
      return <div>Your list is empty</div>
    }
  }
//========================================================================================================================================
  render() {
    return(
      <div className="FavoritesList">
        <div id="add-favorite"><Link to="/favorites/add">Add</Link></div>
        {/* <div id="edit-favorite"><Link to={`/edit/${props.movies.id}`} moves={props.movies}>Edit</Link></div> */}
        <div id="favorite-header">My Favorites</div>
        {this.renderFavoritesList()}
      </div>
    )
  }
}
//========================================================================================================================================
