import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'
import {
  Link,
  useHistory,
  useRouteMatch,
  NavLink,
  Router,
  Switch,
  Route
} from 'react-router-dom'

const Country = ({ country }) => {
  let { path, url } = useRouteMatch()
  const history = useHistory()
  const { alpha3Code } = country
  // console.log('alpha3Code', alpha3Code)
  useEffect(() => {
    if (url === '/') {
      // console.log('path----- : ', url)
      console.log('home page')
    } else {
      console.log('detail page')
    }
  }, [url])
  const handleRoute = () => {
    history.push('/country/CAN')
  }
  return (
    <div className={cn('container', styles.countryBox)}>
      <div>
        <img src={country.flag} className={cn(styles.flag)} />
      </div>
      <div> | {country.name} | </div>
      <div>{country.capital} | </div>
      <div>{country.region}</div>
      <div>
        {url === '/' ? (
          <Link to={`/country/${country.alpha3Code}`}>detail</Link>
        ) : (
          // <button onClick={handleRoute}>Retail Route</button>
          <>
            <Link to={`/country/${country.alpha3Code}`} replace>
              ROUTE LINK
            </Link>
            <a
              style={{ color: 'red', padding: '0 10px' }}
              href={`/country/${country.alpha3Code}`}
            >
              Normal A Tag (with refresh)
            </a>
          </>
        )}

        {/* <NavLink to={`/country/${country.alpha3Code}`}> NavLink </NavLink>
        <a href={`/country/${country.alpha3Code}`}>AAA</a> */}
      </div>
    </div>
  )
}

export default Country
