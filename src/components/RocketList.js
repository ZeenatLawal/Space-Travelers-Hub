import React from 'react';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  const { rocketProps } = props;
  return (
    <li key={rocketProps.id}>
      <p>{rocketProps.rocket_name}</p>
      <p>{rocketProps.description}</p>
      <p>{rocketProps.flickr_images}</p>
    </li>
  );
};

RocketList.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.node,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketList;
