import React from 'react';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  const { rocketProps } = props;
  return (
    <li key={rocketProps.id} className="rocketWrap">
      <div className="imgWrap">
        <img
          src={rocketProps.flickr_images}
          alt="rocket images"
          className="rocketImg"
        />
      </div>
      <div className="textWrap">
        <p>{rocketProps.rocket_name}</p>
        <p>{rocketProps.description}</p>
        <button type="button" className="reserveBtn">
          Reserve Rocket
        </button>
      </div>
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
