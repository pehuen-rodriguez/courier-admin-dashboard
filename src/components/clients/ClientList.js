/* eslint-disable no-undef */
import React, { Component } from 'react'
import Client from './ClientShow'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const CLIENTS_LIST_QUERY = gql`
  {
    clientList {
      clients {
        id
        createdAt
        name
      }
    }
  }
`

class ClientList extends Component {
  render() {
    return (
      <Query query={CLIENTS_LIST_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const clientsToRender = data.clientList.clients
    
          return (
            <div>
              {clientsToRender.map(client => <Client key={client.id} client={client} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ClientList