import React from 'react'

const Border = ({ border }) => {
  return (
    <li>
      {/* <p>
        Normal Link: <a href={border.alpha3Code}>{border.name}</a>{' '}
        <span>{border.region}</span>
      </p> */}

      {/* <Link to={`/country/${border.alpha3Code}`}>{border.name}LINK</Link> */}
      {/* <Link to={border.alpha3Code}>detail LINK</Link> */}
      <img src={border.flag} width={20} />
    </li>
  )
}

export default Border
