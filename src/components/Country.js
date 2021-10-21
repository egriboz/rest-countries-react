import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'

const Country = ({ country }) => {
  let { url } = useRouteMatch()
  const history = useHistory()

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
          <>
            <Link to={`/country/${country.alpha3Code}`} replace>
              ROUTE LINK
            </Link>
            {/* <a
              style={{ color: 'red', padding: '0 10px' }}
              href={`/country/${country.alpha3Code}`}
            >
              Normal A Tag (with refresh)
            </a> */}
          </>
        )}
      </div>
    </div>
  )
}

export default Country
