import React, {Component} from "react";
import {Link} from "react-router-dom";
import Searchbar from './Searchbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>mangAnime</div>
        <Searchbar />
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    )
  }
}

export default Header;
