import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class AddFavorite extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      url: "",
      episodes_watched: "",
      newId: "",
      fireRedirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:value})
  }

  handleFormSubmit(event){
    event.preventDefault();
    axios.post("/favorites", {
      title: this.state.title,
      url: this.state.url,
      episodes_watched: this.state.episodes_watched
    })
    .then(res=> {
      console.log(res);
      this.setState({
        newId: res.data.movie.id,
        fireRedirect: true,
      })
      console.log("You added it successfully", res)
    })
    .catch(err=> console.log("You messed up the add", err))
    event.target.reset()
  }

  render(){
    return(
      <div className="AddFavorite">

        <div id="add-entry">Add an entry</div>

        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.fireRedirect
          ? <Redirect to={`/favorites/${this.state.newId}`} />
        : "" }

      </div>
    )
  }
}

export default AddFavorite;
