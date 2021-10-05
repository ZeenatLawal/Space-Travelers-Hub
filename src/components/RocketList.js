import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookReservation, cancleReservation } from '../redux/rockets/rockets';

const RocketList = (props) => {
  const { rocketProps } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (rocketProps.reserved) {
      return dispatch(cancleReservation(e.target.id));
    }
    return dispatch(bookReservation(e.target.id));
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
        <p>
          {rocketProps.reserved ? (
            <div>
              <span className="reserveBadge">Reserved</span>
              {rocketProps.description}
            </div>
          ) : (
            rocketProps.description
          )}
        </p>
        {rocketProps.reserved && (
          <button
            id={rocketProps.id}
            type="button"
            className="cancelReserveBtn"
            onClick={handleClick}
          >
            Cancel
          </button>
        )}
        {!rocketProps.reserved && (
          <button
            id={rocketProps.id}
            type="button"
            className="ReserveBtn"
            onClick={handleClick}
          >
            Reserve
          </button>
        )}
      </div>
    </li>
  );
};

RocketList.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.node,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    /* eslint-disable*/
    flickr_images: PropTypes.array,
    /* eslint-enable */
  }).isRequired,
};

export default RocketList;
