import React, { Component, Fragment } from 'react'

import Countries from './Countries'
import Search from './Search'


class App extends Component {
    render() {
        return (
            <>
                <Search />
                <Countries />
            </>
        )
    }
}

export default App
