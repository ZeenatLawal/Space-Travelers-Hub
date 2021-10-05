// import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocket = useSelector((state) => state.rocketsReducer.rockets);
  let bookedRockets;
  if (rocket) {
    bookedRockets = rocket.filter((rocket) => rocket.reserved);
  }
  return (
    <div>
      <h2>My Rockets</h2>
      <ul>
        {bookedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketProfile;
