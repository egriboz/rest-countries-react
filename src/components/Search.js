import React, { Component, useState } from 'react'

export class Search extends Component {
  constructor(props) {
    
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: ''
    }
  }

  onChange(e) {
      this.setState({
        keyword: e.target.value
      })
      
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.keyword.length >= 3){
      this.props.searchCountries(this.state.keyword);
    }
  }
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange}/>
          {/* {this.state.keyword.length >= 3 && (
            <button type="submit">Search</button>
          ) } */}
          <button type="submit" disabled={this.state.keyword.length >= 3 ? "" : "disabled"}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search
