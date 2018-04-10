import React, {Component} from "react";
//=====================================================================================================================================
export default class Characters extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    let charactersInfo = []
    this.props.charactersId.forEach(element => {
      fetch(`https://kitsu.io/api/edge/characters/${element}`)
      .then(data => data.json())
      .then(data => {
        charactersInfo.push(data.data)
        if (charactersInfo.length === this.props.charactersId.length) {
          let sortedCharactersInfo = charactersInfo.sort((a, b) => a.id - b.id)
          this.setState({charactersInfo: sortedCharactersInfo}, () => {
            let renderCharactersInfo = this.state.charactersInfo.map(character => {
              if (character.attributes.image) {
                let bg = {backgroundImage: `url(${character.attributes.image.original})`}
                return (
                  <div key={character.id} style={bg}>
                    {character.attributes.canonicalName}
                  </div>
                )
              } else {
                let bg = {backgroundImage: `url(http://res.cloudinary.com/damark726/image/upload/v1523327404/No_image_available_ed3rvn.svg)`, backgroundColor: `#bbbbbb`}
                return (
                  <div key={character.id} style={bg}>
                    {character.attributes.canonicalName}
                  </div>
                )
              }
            })
            if (renderCharactersInfo.length === this.props.charactersId.length) {
              this.setState({renderCharactersInfo: renderCharactersInfo})
            }
          })
        }
      })
    })
  }

  shouldComponentUpdate() {
    if (this.state.names) {
      return false
    } else {
      return true
    }
  }

render() {
    console.log(this.state);
    return (
      <div className="Characters">
        {this.state.renderCharactersInfo ? this.state.renderCharactersInfo : "Loading Characters"}
      </div>
    )
  }
}
//=====================================================================================================================================
