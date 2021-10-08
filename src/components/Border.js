import React from 'react'

const Border = ({border}) => {
    return (
        <li> 
          <a href={border.alpha3Code}>{border.name}</a> <span>{border.region}</span>
          <img src={border.flag} width={20}/>
        </li>
    )
}

export default Border