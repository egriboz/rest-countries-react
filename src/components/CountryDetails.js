import React, { useEffect } from 'react'
import Borders from './Borders'
import Countries from './Countries'
import Loading from './Loading'

const CountryDetails = ({
  getCountry,
  getCountryBorders,
  countryborders,
  borderlists,
  borders,
  countries,
  country,
  match,
  loading
}) => {
  useEffect(() => {
    getCountry(match.params.alpha3Code)
    getCountryBorders(match.params.alpha3Code)
  }, [match.params.alpha3Code])

  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {/* {borderlists && <Borders borders={borderlists} country={country} />} */}
        <Countries countries={borderlists} loading={loading} />
        {borderlists.length < 1 && (
          <p style={{ color: 'red' }}>
            It does not have neighboring countries.
          </p>
        )}

        {/* {borderlists &&
          borderlists.map((item) => {
            return <div key={item.name}>{item.name}</div>
          })} */}

        {/* <ul>
          {borderlists.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul> */}

        {country.name && <p>{country.name}</p>}
        {country.nativeName && <p>{country.nativeName}</p>}
        {country.region && <p>{country.region}</p>}
        {country.subregion && <p>{country.subregion}</p>}
        <p>
          <img src={country.flag} width={100} />
        </p>
      </div>
    )
  }
}

export default CountryDetails
