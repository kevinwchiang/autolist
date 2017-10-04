import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
    };
    this.handleLink = this.handleLink.bind(this);
    this.fetchVehicles = this.fetchVehicles.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {
    this.fetchVehicles();
  }

  handleLink(vehicle) {
    this.props.onLink(vehicle);
  }

  loadMore() {
    this.fetchVehicles();
  }

  fetchVehicles() {
    const { page, data } = this.state;
    const { minPrice, maxPrice } = this.props.search;
    const url = `https://autolist-test.herokuapp.com/search?page=${page}&price_min=${minPrice}&price_max=${maxPrice}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((body) => {
        this.setState({ data: data.concat(body.records), page: page + 1 });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="search-container">
        {data.map(vehicle => (
          <div key={vehicle.vin} className="search-vehicle">
            <Link to="/details" onClick={() => this.handleLink(vehicle)}>
              {`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
            </Link>
          </div>
        ))}
        <button style={{ marginTop: '10px' }} onClick={this.loadMore}>Load more results</button>
      </div>
    );
  }
}

export default Search;
