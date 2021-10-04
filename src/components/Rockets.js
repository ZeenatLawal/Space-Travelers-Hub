import { useSelector } from 'react-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div>
      <ul>
        {rockets.map((rocket) => (
          <RocketList rocketProps={rocket} key={rocket.id} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
