import React, { Component } from 'react'

class Client extends Component {
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

export default Client