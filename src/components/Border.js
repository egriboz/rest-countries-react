import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'

const Border = ({ border }) => {
  let { path, url } = useRouteMatch()
  return (
    <li>
      {/* <p>
        Normal Link: <a href={border.alpha3Code}>{border.name}</a>{' '}
        <span>{border.region}</span>
      </p> */}
      <Redirect to={border.alpha3Code} />
      {/* <Link to={`/country/${border.alpha3Code}`}>{border.name}LINK</Link> */}
      {/* <Link to={border.alpha3Code}>detail LINK</Link> */}
      <img src={border.flag} width={20} />
    </li>
  )
}

export default Border
