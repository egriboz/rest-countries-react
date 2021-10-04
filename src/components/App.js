import React, { Component, Fragment } from 'react'

import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.searchCountries = this.searchCountries.bind(this);
    this.state ={
      loading: false,
      countries: []
    }
  }
  componentDidMount(){
    this.setState({loading: true})
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => this.setState({countries: response.data, loading: false}))
  }    
  searchCountries(keyword){
    this.setState({loading: true})
    axios
    .get(`https://restcountries.com/v2/name/${keyword}`)
    // .then(response => console.log("countries-----:", response));
    .then(response => this.setState({countries: response.data, loading: false}));
    
  }    
  render() {
    return (
      <>
        <Navbar title="Country Info"/>
        <Search searchCountries={this.searchCountries}/>
        <Countries countries={this.state.countries} loading={this.state.loading} />
      </>
    )
  }
}

export default App
