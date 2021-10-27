import React, { useRef } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Test = () => {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` ekrandaki text input elemanına işaret eder
    inputEl.current.focus()
  }
  return (
    <Route
      path="/test/:slug"
      render={({ match }) => {
        return (
          <>
            <div>
              Your current path: <strong>{match.path}</strong>
            </div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
          </>
        )
      }}
    />
  )
}

export default Test
