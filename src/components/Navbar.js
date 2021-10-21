import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { REGION } from '../constants'
const Navbar = ({ title }) => {
  return (
    <>
      {title} |
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      |
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
      <Link to="/country/tur">Turkey L</Link>|
      <Link to="/test/hello">TestLink</Link>
      <div className="regionBox">
        {REGION.map((item) => {
          return (
            <Link key={item.region} to="/region/:slug">
              {item.title}
            </Link>
          )
        })}
      </div>
    </>
  )
}
Navbar.defaultProps = {
  title: 'Site Title'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
export default Navbar
