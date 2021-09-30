import React, { Component, Fragment } from 'react'

import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'

class App extends Component {
    render() {
        return (
            <>
              <Navbar title="Country Info"/>
              <Search />
              <Countries />
            </>
        )
    }
}

export default App
