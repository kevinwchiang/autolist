import React from 'react';

const Details = (props) => {
  const { vehicle } = props.search;
  return (
    <div className="details-container">
      <img className="vehicle-thumbnail" src={vehicle.thumbnail_url_large} alt="thumbnail" />
      <span>{`${vehicle.make} ${vehicle.model} ${vehicle.year}`}</span>
      <span>{`Price: ${vehicle.price}`}</span>
      <span>{`Location: ${vehicle.city}, ${vehicle.state}`}</span>
    </div>
  );
};

export default Details;
