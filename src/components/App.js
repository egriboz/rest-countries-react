import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom'

import Navbar from './Navbar'
import Search from './Search'
import Countries from './Countries'
import About from './Pages/About'
import Region from './Pages/Region'
import CountryDetails from './CountryDetails'
import Test from './Test'

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

  // useEffect(() => {
  //   searchCountries('turkiye')
  //   console.log(
  //     '-------------------------------------------------------------------'
  //   )
  // }, [searchCountries])

  const getAllCountries = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://restcountries.com/v2/all')
      const jsonData = await response.json()
      setCountries(await jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  //

  const getRegion = async (region) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/region/${region}`
      )
      const jsonData = await response.json()
      setCountries(await jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  //
  const searchCountries = async (keyword) => {
    console.log('keywordkeywordkeywordkeyword', keyword)
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/name/${keyword}`
      )
      const jsonData = await response.json()
      setCountries(await jsonData)
      setLoading(false)
    } catch (error) {
      setCountries([])
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
      setCountry(await jsonData)
      setLoading(false)
    } catch (error) {
      setCountries([])
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

      setCountryborders(await borders)
      getBorderlists(await borders)
      setLoading(false)
    } catch (error) {
      console.warn(
        'It does not have neighboring countries. ============== > ',
        error
      )
      setCountryborders([])
      setBorderlists([])
    }
  }

  const getBorderlists = async (borders) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://restcountries.com/v2/alpha?codes=${borders}`
      )
      const jsonData = await response.json()
      setBorderlists(await jsonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <Navbar
        getAllCountries={getAllCountries}
        getRegion={getRegion}
        loading={loading}
        title="Country Info"
      />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Test />

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
        <Route exact path="/region" component={Region} />
        <Route
          exact
          path="/region/:region"
          render={() => (
            <>
              <Countries countries={countries} loading={loading} />
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />

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
                length={country.length}
                countryborders={countryborders}
                borderlists={borderlists}
                loading={loading}
                countries={borderlists}
              />
            </>
          )}
        />
      </Switch>
    </Router>
  )
}

export default App
