import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { REGION } from '../constants'
const Navbar = ({ title, getAllCountries, getRegion, loading }) => {
  const onClick = (e) => {
    let rgn = e.target.getAttribute('data-region')
    getRegion(rgn)
  }

  const lastPath = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  )
  const firstPath = window.location.pathname.split('/')[1]

  useEffect(() => {
    if (window.location.pathname === '/region/polar') {
      console.log('region sayfa...', window.location.pathname)
      setTimeout(() => {
        getRegion(lastPath)
      }, 500)
    } else {
      getAllCountries()
      console.log('herhangi bir sayfa...', window.location.pathname)
    }
  }, [window.location.pathname])

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
            <Link
              key={item.region}
              data-region={item.region}
              to={`/region/${item.region}`}
              onClick={onClick}
            >
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
