import React from 'react';
import {BrowserRouter, Router, Link, NavLink, Switch, Route} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

const About = (props) => {
  console.log(props);
  const str = JSON.stringify(props);
  return (
    <>
      <h2>User Details{str}</h2>
    </>
  )
}

function Users() {
  return <h2>Users</h2>;
}

const UserDetails = (props) => {
  console.log(props);
  return (
    <>
      <h2>User {props.match.params.id}</h2>
    </>
  )
}

function NotFound() {
  return <h2>404</h2>;
}

const AppRouter = () => (
<BrowserRouter>
  <div>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">About</NavLink>
        </li>
        <li>
          <NavLink exact to="/users" activeClassName="selected">Users</NavLink>
        </li>
        <li>
          <NavLink to="/users/12" activeClassName="selected">User Details</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={UserDetails} />
      <Route exact component={NotFound} />
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter