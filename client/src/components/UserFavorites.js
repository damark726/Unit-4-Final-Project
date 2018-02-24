import React from 'react';
// import {Link} from 'react-router-dom';
// import deleteMovie from './deleteMovie'

class UserFavorites extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stuff: this.props.things
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="user-fav">
        <div>{this.state.stuff.title}</div>
      </div>
    )
  }
}

export default UserFavorites;
