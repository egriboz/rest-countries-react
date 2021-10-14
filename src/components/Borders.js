import React from 'react'
import Border from './Border'

const Borders = ({ borders }) => {
  return borders.map((border) => (
    <Border border={border} key={border.alpha3Code} />
  ))
}

export default Borders
