import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Country.module.scss'

export class Country extends Component {
  render() {
    const {name, region, flag} = this.props.country;
    // console.log("dsdsdsdsds", this.props.country);
    return (
      <div className={cn('container', styles.countryBox)}>
        <div>
          <img src={flag} className={cn(styles.flag)}/>
        </div>
        <div>{name}</div>
        <div>{region}</div>
      </div>
    )
  }
}

export default Country
