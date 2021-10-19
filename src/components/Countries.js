import React from 'react'
import Country from './Country'
import Loading from './Loading'

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        {countries.status != 404 &&
          countries.map((country) => (
            <Country key={country.alpha3Code} country={country} />
          ))}
        {countries.status == 404 && <p>Country is not found!</p>}
      </>
    )
  }
}

export default Countries
