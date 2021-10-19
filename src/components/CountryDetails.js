import React, { useEffect } from 'react'
import Borders from './Borders'
import Loading from './Loading'

const CountryDetails = ({
  getCountry,
  getCountryBorders,
  // countryborders,
  borderlists,
  country,
  match,
  loading
}) => {
  useEffect(() => {
    getCountry(match.params.alpha3Code)
    getCountryBorders(match.params.alpha3Code)
  }, [])
  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        <Borders borders={borderlists} />
        {/* {borderlists &&
          borderlists.map((item) => {
            return <div key={item.name}>{item.name}</div>
          })} */}

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
