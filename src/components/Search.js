import React, { Component, useState } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      keyword: ''
      // data: []
    }
    // console.log(this.props.loading);
  }
  componentDidMount() {
    // fetch(`https://restcountries.com/v2/all`)
    //   .then(res => res.json())
    //   .then(json => this.setState({ data: json }));

    console.log('search did mount')
  }

  onChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    if (this.state.keyword.length == 0) {
      this.props.getAllCountries()
    } else {
      this.props.searchCountries(this.state.keyword)
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} style={{ marginTop: '20px' }}>
          <input type="text" onChange={this.onChange} />
          {/* {this.state.keyword.length >= 3 && (
            <button type="submit">Search</button>
          ) } */}
          <button type="submit">Search</button>
          {/* disabled={this.state.keyword.length >= 3 ? "" : "disabled"} */}
        </form>
        {!this.props.loading && <p>Found {this.props.length} countries</p>}
      </>
    )
  }
}

export default Search
