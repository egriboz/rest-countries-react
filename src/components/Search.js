import React, { useState, useEffect } from 'react'

const Search = ({ getAllCountries, searchCountries, loading, length }) => {
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    // console.log(loading)
  }, [])

  const onChange = (e) => {
    setKeyword(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (keyword.length == 0) {
      getAllCountries()
    } else {
      searchCountries(keyword)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {!loading && <p>Found {length} countries</p>}
    </>
  )
}

export default Search
