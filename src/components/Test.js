import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Test = () => {
  return (
    <Route
      path="/test/:slug"
      render={({ match }) => {
        return (
          <div>
            Your current path: <strong>{match.path}</strong>
          </div>
        )
      }}
    />
  )
}

export default Test
