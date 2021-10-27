import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { REGION } from '../constants'
const Navbar = ({ title, getAllCountries, getRegion, loading }) => {
  const location = useLocation()

  const onClick = (e) => {
    let rgn = e.target.getAttribute('data-region')
    getRegion(rgn)
  }

  const lastPath = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  )
  const firstPath = window.location.pathname.split('/')[1]

  useEffect(() => {
    console.log('useLocationuseLocationuseLocation', location.pathname)

    if (firstPath === 'region') {
      // console.log('region sayfa...', window.location.pathname)
      getRegion(lastPath)
    } else {
      getAllCountries()
      // console.log('herhangi bir sayfa...', window.location.pathname)
    }
    // console.log('lastPath:::', firstPath, '---', lastPath)
  }, [location.pathname])

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
