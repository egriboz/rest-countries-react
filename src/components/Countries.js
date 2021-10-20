import React, { useState } from 'react'
import Country from './Country'
import Loading from './Loading'
import { orderBy, SortArrow } from '../functions/Sort'

const Countries = ({ countries, loading }) => {
  const [value, setValue] = useState('')
  const [direction, setDirection] = useState(null)

  const countriesOrdered = orderBy(countries, value, direction)

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc')
      console.log('d---desc')
    } else if (direction === 'desc') {
      setDirection('asc')
      console.log('d---asc')
    } else {
      setDirection(null)
      console.log('d---null')
    }
  }

  const setValueAndDirection = (value) => {
    switchDirection()
    setValue(value)
    // console.log('value', value)
  }

  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        <p>-------------------------------------------</p>
        <button onClick={() => setValueAndDirection('name')}>Name</button>
        <button onClick={() => setValueAndDirection('population')}>
          population
        </button>

        {countriesOrdered.status != 404 &&
          countriesOrdered.map((country) => (
            <Country key={country.alpha3Code} country={country} />
          ))}
        {countriesOrdered.status == 404 && (
          <p style={{ color: 'red' }}>Country is not found!</p>
        )}
      </>
    )
  }
}

export default Countries
