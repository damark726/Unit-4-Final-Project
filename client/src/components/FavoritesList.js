import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import UserFavorites from "./UserFavorites";

class FavoritesList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
    this.renderFavoritesList = this.renderFavoritesList.bind(this);
  }

  componentDidMount() {
    axios.get("/favorites")
    .then(res => {
      console.log(res);
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderFavoritesList() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(manganime => {
        return(
          <UserFavorites key={manganime.id} things={manganime} />
        );
      });
    } else {
      return <div>Your list is empty</div>
    }
  }


  render() {
    return(
      <div className="FavoritesList">
        <div id="addFavorite"><Link to="/favorites/add">Add</Link></div>
        <div id="favoriteHeader">My Favorites</div>
        <div id="favoriteListItem">{this.renderFavoritesList()}</div>
      </div>
    )
  }
}

export default FavoritesList;
