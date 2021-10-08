import React, { Component } from 'react'
import Borders from './Borders';
import Loading from './Loading';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    // this.setState({
    //   items: null
    // });
  }
  componentDidMount() {
    this.props.getCountry(this.props.match.params.alpha3Code);
    this.props.getCountryBorders(this.props.match.params.alpha3Code);

    // this.getBorder();



    // console.log("this.props", this.props);
    // console.log("CountryDetails:", this.props.country.borders)
    
    // const response = await fetch('https://restcountries.com/v2/all');
    // const jsonData = await response.json();
    // this.setState({ countries: jsonData, loading: false });

    // fetch('https://api.npms.io/v2/invalid-url')
    // .then(async response => {
    //     const data = await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //         // get error message from body or default to response statusText
    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     this.setState({ totalReactPackages: data.total })
    // })
    // .catch(error => {
    //     this.setState({ errorMessage: error.toString() });
    //     console.error('There was an error!', error);
    // });


  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("componentDidUpdate", this.props.match.params.alpha3Code);
  }

  // getBorder() {
  //   fetch(`https://restcountries.com/v2/alpha/${this.props.match.params.alpha3Code}`)
  //     .then(async response => {
  //         const data = await response.json();

  //         // check for error response
  //         if (!response.ok) {
  //             // get error message from body or default to response statusText
  //             // const error = (data && data.message) || response.statusText;
  //             return Promise.reject(error);
  //         }
          
  //         const aaa = data.borders.map((item) => item);
  //         console.log('cdcomp, data:', aaa);
          
  //         //this.setState({ totalReactPackages: data.total })
  //     })
  //     .catch(error => {
  //         // this.setState({ errorMessage: error.toString() });
  //         console.error('There was an error!', error);
  //     });
  // }
  render() {
    const {name, region, flag, flags, svg, png, translations, alpha3Code, borders, currencies} = this.props.country;
    const names = ["Bruce", "Clark", "Diana"]
    
    const borderList = JSON.stringify(borders);
    const nameList = JSON.stringify(names);

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );

    const listTwo = names.map((item) =>
      <li key={item}>{item}</li>
    );
    
    // const borders = await Promise.all(
    //   this.props.country.translations.map(x => x * 2);
    // );
    // const map1 = numbers.map(x => x * 2);
    // console.log(map1);
    setTimeout(() => {
      
      // console.log("CountryDetails", this.props.country.borders, this.props.country.translations.fa)
    }, 1000);
    // const bbb = this.props.country.borders.map((item) => item);
    
    // console.log(translations, typeof names);
    // const items  = this.state.items;
    // console.log("iii", items)

    const items  = this.props.countryborders;
    const borderlists  = this.props.borderlists;
    // console.log("countryborders: ", items);
    console.log("countryborders: ", borderlists);
    
    // console.log(this.props)
    if(this.props.loading){
      return <Loading />
    } else {
      return (
        <div>
          <Borders borders={borderlists} />
          {/* <ul>{listTwo}</ul> */}
          <ul>{listItems}</ul>
          <p>{name}</p>
          <p>{names}</p>
          <p>{nameList}</p>
          
          {/* {this.props.borderlists.map((item)=>{
            return (
              <div key={item}>{item}</div>
            )
            })} */}
          {items.map((item)=>{
            return (
              <div key={item}>{item}</div>
            )
            })}
          {/* <p><img src={flag}/></p> */}
        </div>
      )
    }
  
  }
}

export default CountryDetails
