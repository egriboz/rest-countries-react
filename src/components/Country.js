import React from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
  return (
    <div className={cn('container', styles.countryBox)}>
      <div>
        <img src={country.flag} className={cn(styles.flag)} />
      </div>
      <div> | {country.name} | </div>
      <div>{country.capital} | </div>
      <div>{country.region}</div>
      <div>
        <Link to={`/country/${country.alpha3Code}`}>detail</Link>
      </div>
    </div>
  )
}

export default Country
