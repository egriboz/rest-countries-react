import React, { Component } from 'react'
import Loading from './Loading';

class CountryDetails extends Component {
  componentDidMount() {
    this.props.getCountry(this.props.match.params.alpha3Code);
  }
  render() {
    const {name, region, flag, capital, alpha3Code} = this.props.country;
    if(this.props.loading){
      return <Loading />
    } else {
      return (
        <div>
          {name}<p><img src={flag}/></p>
        </div>
      )
    }
  }
}

export default CountryDetails
