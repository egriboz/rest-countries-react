import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { REGION } from '../constants'
const Navbar = ({ title, getAllCountries, getRegion, loading }) => {
  const [click, setClick] = useState(false)

  const location = useLocation()

  const onClick = (e) => {
    let rgn = e.target.getAttribute('data-region')
    getRegion(rgn)
    setClick(true)
  }

  const lastPath = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  )
  const firstPath = window.location.pathname.split('/')[1]

  useEffect(() => {
    if (firstPath === 'region' && click) {
      getRegion(lastPath)
      console.log('region page - with click')
    } else if (firstPath === 'region' && !click) {
      setTimeout(() => {
        getRegion(lastPath)
        console.log('region page - refresh')
      }, 500)
    } else {
      getAllCountries()
      console.log('not region page')
    }
  }, [lastPath])

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
      |<NavLink to="/country/tur">Turkey</NavLink>| |
      <NavLink to="/region">Region</NavLink>|
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
