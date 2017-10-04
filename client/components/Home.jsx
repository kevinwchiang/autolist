import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 0
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.minChange = this.minChange.bind(this);
    this.maxChange = this.maxChange.bind(this);
  }

  handleSearch() {
    const { minPrice, maxPrice } = this.state;
    this.props.onSearch({ minPrice, maxPrice });
  }

  minChange(event) {
    this.setState({ minPrice: event.target.value })
  }

  maxChange(event) {
    this.setState({ maxPrice: event.target.value })
  }

  render() {
    return (
      <div className="home-container">
        <span>Min Price: </span>
        <input
          type="text"
          value={this.state.minPrice}
          onChange={ (event) => this.minChange(event) }
        />
        <span>Max Price: </span>
        <input
          type="text"
          value={this.state.maxPrice}
          onChange={ (event) => this.maxChange(event) }
        />
        <Link to='/search'>
          <button onClick={this.handleSearch}>Search</button>
        </Link>
      </div>
    );
  }
}

export default Home;