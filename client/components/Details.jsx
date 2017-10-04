import React, { Component } from 'react';

class Details extends Component {
  render() {
    const { vehicle } = this.props.search;
    console.log('heh',vehicle)
    return (
      <div className="details-container">
        <img className="vehicle-thumbnail" src={vehicle.thumbnail_url_large}/>
        <span>{`${vehicle.make} ${vehicle.model} ${vehicle.year}`}</span>
        <span>{`Price: ${vehicle.price}`}</span>
        <span>{`Location: ${vehicle.city}, ${vehicle.state}`}</span>
      </div>
    );
  }
}

export default Details;