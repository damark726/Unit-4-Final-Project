import React, {Component} from "react";
//=====================================================================================================================================
export default class RelatedMedia extends Component {
  constructor() {
    super()
    this.state = {}
  }
//=====================================================================================================================================
  componentDidMount() {
    let relatedMedia = []
    this.props.relatedMedia.forEach(manganime => {
      fetch(manganime.relationships.destination.links.self)
      .then(data => data.json())
      .then(data => {
        let obj = {type: data.data.type, id: data.data.id}
        relatedMedia.push(obj)
        if (relatedMedia.length === this.props.relatedMedia.length) {
          let relatedMediaInfo = []
          relatedMedia.forEach(manganime => {
            fetch(`https://kitsu.io/api/edge/${manganime.type}/${manganime.id}`)
            .then(nestedData => nestedData.json())
            .then(nestedData => {
              let info = nestedData.data.attributes
              relatedMediaInfo.push(info)
              if (relatedMediaInfo.length === relatedMedia.length) {
                this.setState({relatedMedia: relatedMediaInfo})
              }
            })
          })
        }
      })
    })
  }

  renderRelatedMedia() {
    return this.state.relatedMedia.map((manganime, index) => {
      return (
        <div key={index}>
          {manganime.canonicalTitle}
        </div>
      )
    })
  }
//=====================================================================================================================================
  render() {
    // console.log(this.state.relatedMedia);
    return (
      <div>
        {this.state.relatedMedia ? this.renderRelatedMedia() : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
