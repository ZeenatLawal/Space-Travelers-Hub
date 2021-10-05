// import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let bookedRockets;
  if (rockets) {
    bookedRockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (
    <div>
      <h2>My Rockets</h2>
      {bookedRockets && (
        <ul>
          {bookedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      )}
      {(!bookedRockets || !bookedRockets[0]) && (
        <h4>You have not reserved any rocket!</h4>
      )}
    </div>
  );
};

export default RocketProfile;
