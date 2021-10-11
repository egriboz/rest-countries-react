import React, { Component } from 'react'
import Borders from './Borders';
import Loading from './Loading';

class CountryDetails extends Component {
  constructor(props) {
    super(props); 
  }
  componentDidMount() {
    this.props.getCountry(this.props.match.params.alpha3Code);
    this.props.getCountryBorders(this.props.match.params.alpha3Code);

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("componentDidUpdate", this.props.match.params.alpha3Code);
  }

  render() {
    const {name, region, flag, flags, alpha3Code, borders} = this.props.country;
    const names = ["Bruce", "Clark", "Diana"]

    const items  = this.props.countryborders;
    const borderlists  = this.props.borderlists;
    
    // console.log("countryborders: ", borderlists);
    // console.log(this.props)
    if(this.props.loading){
      return <Loading />
    } else {
      return (
        <div>
          <Borders borders={borderlists} />
          {items.map((item)=>{
            return (
              <div key={item}>{item}</div>
            )
            })}
          <p>{name}</p>
          <p><img src={flag} width={100}/></p>
        </div>
      )
    }
  
  }
}

export default CountryDetails
