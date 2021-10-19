import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'
import About from './Pages/About'
import CountryDetails from './CountryDetails'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [countryborders, setCountryborders] = useState([])
  const [borderlists, setBorderlists] = useState([])
  const [country, setCountry] = useState({})
  const borders = []

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://restcountries.com/v2/all')
      const jsonData = await response.json()
      setCountries(jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const searchCountries = async (keyword) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/name/${keyword}`
      )
      const jsonData = await response.json()
      setCountries(jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const getCountry = async (alpha3Code) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${alpha3Code}`
      )
      const jsonData = await response.json()
      setCountry(jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getCountryBorders = async (alpha3Code) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${alpha3Code}`
      )
      const jsonData = await response.json()
      const borders = await jsonData.borders.map((item) => item)

      setCountryborders(borders)
      setLoading(false)
      aFunc(borders)
    } catch (error) {
      console.warn(
        'It does not have neighboring countries. ============== > ',
        error
      )
      setCountryborders([])
      setBorderlists([])
    }
  }

  const aFunc = async (borders) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/alpha?codes=${borders}`
      )
      const jsonData = await response.json()
      setBorderlists(jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <Navbar title="Country Info" />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Search
                searchCountries={searchCountries}
                getAllCountries={getAllCountries}
                loading={loading}
                length={countries.length}
              />
              <Countries countries={countries} loading={loading} />
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route
          path="/country/:alpha3Code"
          render={(props) => (
            <>
              <CountryDetails
                {...props}
                borders={borders}
                getCountryBorders={getCountryBorders}
                getCountry={getCountry}
                country={country}
                countryborders={countryborders}
                borderlists={borderlists}
                loading={loading}
              />
            </>
          )}
        />
      </Switch>
    </Router>
  )
}

export default App
