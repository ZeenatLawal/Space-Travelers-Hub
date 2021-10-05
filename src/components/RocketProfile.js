import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let bookedRockets;
  if (rockets) {
    bookedRockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (
    <div className="rocketProfileWrap">
      <h4 className="myRockets">My Rockets</h4>
      {bookedRockets && (
        <ul className="myRocketLists">
          {bookedRockets.map((rocket) => (
            <li key={rocket.id} className="myRocketList">{rocket.rocket_name}</li>
          ))}
        </ul>
      )}
      {(!bookedRockets || !bookedRockets[0]) && (
        <h5 className="noReservation">No reservation yet!</h5>
      )}
    </div>
  );
};

export default RocketProfile;
