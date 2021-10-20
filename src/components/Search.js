import React, { useState, useEffect } from 'react'

const Search = ({
  getAllCountries,
  country,
  searchCountries,
  loading,
  length
}) => {
  const [keyword, setKeyword] = useState('')

  // useEffect(() => {
  //   console.log('length', length)
  // }, [length])

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
  const userType = 1
  return (
    <>
      <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {/* {!loading && <p>Found {length} countries</p>} */}
      {(() => {
        if (length === undefined) {
          return null
        } else if (length > 1) {
          return <p>Found {length} countries</p>
        } else {
          return null
        }
      })()}
    </>
  )
}

export default Search
