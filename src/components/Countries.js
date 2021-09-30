import React, { Component } from 'react'
import Country from './Country'
import Loading from './Loading'

export class Countries extends Component {   
  render() {
    console.log("loading", this.props.loading)
    if(this.props.loading){
      return <Loading />
    }else {
      return (
        <>
            {this.props.countries.map(country => ( 
              <Country key={country.alpha3Code} country={country}/>
            ))}
        </>
      ) 
    }
  }
}

export default Countries
