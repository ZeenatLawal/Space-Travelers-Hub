import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  return (
    <div>
      <ul>
        {rockets && rockets.map((rocket) => (
          <RocketList rocketProps={rocket} key={rocket.id} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
