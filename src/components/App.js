import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import ClientCreate from './clients/ClientCreate'
import ClientDelete from './clients/ClientDelete'
import ClientEdit from './clients/ClientEdit'
import ClientList from './clients/ClientList'
import ClientShow from './clients/ClientShow'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/clients" component={ClientList} />
            <Route exact path="/clients/new" component={ClientCreate} />
            <Route exact path="/clients/delete" component={ClientDelete} />
            <Route exact path="/clients/edit" component={ClientEdit} />
            <Route exact path="/clients/show" component={ClientShow} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App