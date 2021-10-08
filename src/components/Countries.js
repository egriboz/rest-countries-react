import React, { Component } from 'react'
import Country from './Country'
import Loading from './Loading'

class Countries extends Component {   
  render() {
    // console.log("loading", this.props.loading)
    // console.log("status", this.props.countries.status);
    if(this.props.loading){
      return <Loading />
    }else {
      return (
        <>
            {this.props.countries.status != 404 && this.props.countries.map(country => ( 
              <Country key={country.alpha3Code} country={country} />
            ))}
            {this.props.countries.status == 404 && <p>Country is not found!</p>}
        </>
      ) 
    }
  }
}

export default Countries
