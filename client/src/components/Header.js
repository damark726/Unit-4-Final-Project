import React, {Component} from "react";
import {Link} from "react-router-dom";
//=====================================================================================================================================
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>mangAnime</div>
        <Link to="/search">Search</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/anime">See Anime Only</Link>
        <br />
        <Link to="/manga">See Manga Only</Link>
        <br />
        <Link to='/favorites'>Favorites</Link>
        <br />
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Register</Link>
        <br /><br />
      </div>
    )
  }
}
//=====================================================================================================================================
