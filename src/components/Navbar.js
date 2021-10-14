import React, { Component } from 'react'
import {
  BrowserRouter,
  Router,
  Link,
  NavLink,
  Switch,
  Route
} from 'react-router-dom'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
      <>
        {this.props.title} |{' '}
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </>
    )
  }
}
Navbar.defaultProps = {
  title: 'Site Title'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
export default Navbar
