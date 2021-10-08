import React, { Component } from 'react'
import {BrowserRouter as Router, Link, NavLink, Switch, Route} from "react-router-dom";
import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'
import About from './Pages/About';
import CountryDetails from './CountryDetails';
// import Borders from './Borders';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchCountries = this.searchCountries.bind(this);
    this.getAllCountries = this.getAllCountries.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.getCountryBorders = this.getCountryBorders.bind(this);
    this.state ={
      loading: false,
      countries: [],
      countryborders: [],
      borderlists: [],
      country: {}
    }
  }
  
  // componentWillMount(){
  //   console.log('First called...');
  // }
  async componentDidMount(){
    this.getAllCountries();
  }

  async getAllCountries(){
    try {
      this.setState({loading: true})
      const response = await fetch('https://restcountries.com/v2/all');
      const jsonData = await response.json();
      this.setState({ countries: jsonData, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  

  async searchCountries(keyword){
    try {
      this.setState({loading: true})
      const response = await fetch(`https://restcountries.com/v2/name/${keyword}`);
      const jsonData = await response.json();
      this.setState({ countries: jsonData, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  async getCountry(alpha3Code){
    // this.setState({loading: true})
    // axios
    // .get(`https://restcountries.com/v2/alpha/${alpha3Code}`)
    // // .then(response => console.log("countries-----:", response));
    // .then(response => this.setState({country: response.data, loading: false}));
    try {
      this.setState({loading: true})
      const response = await fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
      const jsonData = await response.json();
      this.setState({ country: jsonData, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  // async getCountryBorders(alpha3Code){
  //   try {
  //     const response = await fetch(`https://restcountries.com/v2/alpha/tur`);
  //     const jsonData = await response.json();
  //     const bbb = ["Bruce", "Clark", "Diana"]
  //     const names = await Promise.all(
  //           bbb.map((border) => console.log(border,"aaa"))
  //         );
  //   } catch (error) {
  //     console.log("error = > ", error);
  //   }
  // }

  // getCountryBorders(alpha3Code){
  //   this.setState({loading: true})
  //   axios
  //   .get(`https://restcountries.com/v2/alpha/tur`)
  //   .then(response => {
  //     const allBorders = response.data.borders.map((item) => item);
  //     const obj = Object.assign({}, allBorders);
  //     this.setState({allborders: allBorders})
  //   });
  // }
  async getCountryBorders(alpha3Code){
    try {
      this.setState({loading: true})
      const response = await fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
      const jsonData = await response.json();
      const borders = await jsonData.borders.map((item) => item);
      this.setState({ countryborders: borders, loading: false });
      this.aFunc();
    } catch (error) {
      console.log("error = > ", error);
    }
  }
  
  async aFunc(){
    console.log("this-state-------", this.state.countryborders);
    try {
      this.setState({loading: true})
      const response = await fetch(`https://restcountries.com/v2/alpha?codes=${this.state.countryborders}`);
      const jsonData = await response.json();
      this.setState({ borderlists: jsonData, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const loading = this.state.loading;
    return (
      <Router>
        <Navbar title="Country Info"/>
        <Switch>
          <Route exact path="/" render={ props => (
              <>
                <Search searchCountries={this.searchCountries} getAllCountries={this.getAllCountries} loading={this.state.loading} length={this.state.countries.length}/>
                {/* <Borders {...props} getCountryBorders={this.getCountryBorders} allborders={this.state.allborders}/> */}
                <Countries countries={this.state.countries} loading={this.state.loading} />
              </>
            )
          } />
          <Route path="/about" component={About} />
           <Route path="/country/:alpha3Code" render={ props => (
            <>  
              <CountryDetails 
                {...props} 
                getCountryBorders={this.getCountryBorders}
                getCountry={this.getCountry}
                country={this.state.country}
                countryborders={this.state.countryborders}
                borderlists={this.state.borderlists}
                loading={this.state.loading}/>
            </>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
