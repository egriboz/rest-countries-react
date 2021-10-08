import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'
import { Link } from 'react-router-dom';

class Country extends Component {
  render() {
    const {name, region, flag, flags, svg, png, capital, alpha3Code, borders} = this.props.country;
    // console.log("Country", this.props.country.borders);
    return (
      <div className={cn('container', styles.countryBox)}>
        <div>
          <img src={flag} className={cn(styles.flag)}/>
        </div>
        <div> | {name} | </div>
        <div>{capital} | </div>
        <div>{region}</div>
        <div><Link to={`/country/${alpha3Code}`}>detail ></Link></div>
      </div>
    )
  }
}

export default Country
