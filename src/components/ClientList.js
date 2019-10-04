import React, { Component } from 'react'
import Client from './Client'

class ClientList extends Component {
  render() {
    const clientsToRender = [
      {
        id: '1',
        name: 'Primer nombre hardcode'
      },
      {
        id: '2',
        name: 'Segundo nombre hardcode'
      },
    ]

    return (
      <div>{clientsToRender.map(client => <Client id={client.id} client={client} />)}</div>
    )
  }
}

export default ClientList