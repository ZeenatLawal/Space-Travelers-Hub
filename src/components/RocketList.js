import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookReservation,  } from '../redux/rockets/rockets';

const RocketList = (props) => {
  const { rocketProps } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (rocketProps.reserved) {
      dispatch()
    }
    dispatch(bookReservation(e.target.id));
  };

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
        <button
          id={rocketProps.id}
          type="button"
          className="reserveBtn"
          onClick={handleClick}
        >
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
