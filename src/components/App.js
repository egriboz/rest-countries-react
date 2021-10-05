import React, { Component } from 'react'
import {BrowserRouter as Router, Link, NavLink, Switch, Route} from "react-router-dom";
import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'
import About from './Pages/About';
import axios from 'axios'
import CountryDetails from './CountryDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchCountries = this.searchCountries.bind(this);
    this.getAllCountries = this.getAllCountries.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.state ={
      loading: false,
      countries: [],
      country: {}
    }
  }
  
  // componentWillMount(){
  //   console.log('First called...');
  // }

  getAllCountries(){
    // this.setState({
    //   countries: []
    // })
    this.setState({loading: true})
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => this.setState({countries: response.data, loading: false}))
  }
  
  componentDidMount(){
    this.getAllCountries();  
  }

  searchCountries(keyword){
    this.setState({loading: true})
    axios
    .get(`https://restcountries.com/v2/name/${keyword}`)
    // .then(response => console.log("countries-----:", response));
    .then(response => this.setState({countries: response.data, loading: false}));
  }
  getCountry(alpha3Code){
    this.setState({loading: true})
    axios
    .get(`https://restcountries.com/v2/alpha/${alpha3Code}`)
    // .then(response => console.log("countries-----:", response));
    .then(response => this.setState({country: response.data, loading: false}));
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
                <Countries countries={this.state.countries} loading={this.state.loading} />
              </>
            )
          } />
          <Route path="/about" component={About} />
          <Route path="/country/:alpha3Code" render={ props => (
            <CountryDetails {...props} getCountry={this.getCountry} country={this.state.country} loading={this.state.loading}/>
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
