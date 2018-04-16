import React, {Component} from "react";
//=====================================================================================================================================
export default class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: this.props.reviews
    }
    // this.nextPage = this.nextPage.bind(this)
    // this.prevPage = this.prevPage.bind(this)
  }
//=====================================================================================================================================
  componentDidMount() {
    let reviews = []
    this.state.reviews.data.forEach(review => {
      fetch(review.relationships.user.links.related)
      .then(data => data.json())
      .then(data => {
        let obj = {content: review.attributes.content, userName: data.data.attributes.name, avatar: data.data.attributes.avatar}
        reviews.push(obj)
      })
      .then(this.setState({testing: reviews}))
    })
  }
//=====================================================================================================================================
  // renderReviews() {
  //   return this.state.reviews.data.map(review => {
  //     return(
  //       <div className="review" key={review.id}>
  //         {review.attributes.content}
  //       </div>
  //     )
  //   })
  // }
//=====================================================================================================================================
  // prevPage() {
  //   if (this.state.reviews.links.prev) {
  //     fetch(this.state.reviews.links.prev)
  //     .then(data => data.json())
  //     .then(data => {
  //       this.setState({reviews: data})
  //     })
  //   }
  // }
  //=====================================================================================================================================
    // nextPage() {
    //   if (this.state.reviews.links.next) {
    //     fetch(this.state.reviews.links.next)
    //     .then(data => data.json())
    //     .then(data => {
    //       this.setState({reviews: data})
    //     })
    //   }
    // }

    testing() {
      return this.state.testing.map((review, index) => {
        console.log(review);
        if (review.avatar) {
          let bg = {backgroundImage: `url(${review.avatar.original})`}
          return (
            <div className="review" key={index}>
              <div className="testinggg" style={bg}></div>
              <div>{review.userName}</div>
              <div>{review.content}</div>
            </div>
          )
        } else {
          let bg = {backgroundImage: `url(http://res.cloudinary.com/damark726/image/upload/v1523851480/blank-profile-picture-973460_960_720_kxhies.png)`}
          return (
            <div className="review" key={index}>
              <div className="testinggg" style={bg}></div>
              <div>{review.userName}</div>
              <div>{review.content}</div>
            </div>
          )
        }
      })
    }
//=====================================================================================================================================
  render() {
    return(
      <div className="reviews-container">
        {/* <div className="prev-page" onClick={this.prevPage}>Prev Page</div> */}
        {/* <div className="next-page" onClick={this.nextPage}>Next Page</div> */}
        {/* {this.renderReviews()} */}
        {this.state.testing ? this.state.testing.length > 0 ? this.testing() : "" : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
