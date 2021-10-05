import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'
import { Link } from 'react-router-dom';

export class Country extends Component {
  render() {
    const {name, region, flag, capital, alpha3Code} = this.props.country;
    // console.log("dsdsdsdsds", this.props.country);
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
