import React from 'react';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  const { rocketProps } = props;
  return (
    <li key={rocketProps.id}>
      <p>{rocketProps.rocket_name}</p>
      <p>{rocketProps.description}</p>
      <img
        src={rocketProps.flickr_images}
        alt="rocket images"
        className="rocketImg"
      />
    </li>
  );
};

RocketList.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.node,
    description: PropTypes.string,
    /* eslint-disable*/
    flickr_images: PropTypes.array,
    /* eslint-enable */
  }).isRequired,
};

export default RocketList;
