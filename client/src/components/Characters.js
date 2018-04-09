import React, {Component} from "react";
//=====================================================================================================================================
export default class Characters extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    let charactersInfo = []
    let sortedCharactersId = this.props.charactersId.sort()
    console.log(sortedCharactersId);
    sortedCharactersId.forEach(element => {
      fetch(`https://kitsu.io/api/edge/characters/${element}`)
      .then(data => data.json())
      .then(data => {
        // charactersInfo.push(`${data.data.id} - ${data.data.attributes.canonicalName}`)
        charactersInfo.push(data.data)
        if (charactersInfo.length === sortedCharactersId.length) {
          this.setState({charactersInfo: charactersInfo}, () => {
            let names = this.state.charactersInfo.map(name => {
              return (<div key={name.id}>{name.attributes.canonicalName}</div>)
            })
            if (names.length === sortedCharactersId.length) {
              this.setState({names: names})
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
        {this.state.names ? this.state.names : ""}
      </div>
    )
  }
}
//=====================================================================================================================================
