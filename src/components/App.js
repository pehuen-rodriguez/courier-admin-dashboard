import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import ClientList from './ClientList'
import CreateClient from './CreateClient'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={ClientList} />
            <Route exact path="/create" component={CreateClient} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App