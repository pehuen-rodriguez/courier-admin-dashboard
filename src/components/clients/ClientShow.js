import React, { Component } from 'react'

class ClientShow extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.client.id} ({this.props.client.name})
        </div>
      </div>
    )
  }
}

export default ClientShow