import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}
Navbar.defaultProps = {
  title: 'Site Title'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
export default Navbar
