import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from './RocketProfile';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);

  let filterReserved;
  if (missions) {
    filterReserved = missions.filter((mission) => mission.reserved);
  }

  return (
    <div className="myProfile mt-4">
      <div className="rocketProfileWrap me-5">
        <h4 className="myRockets">My Missions</h4>
        <ul className="myRocketLists">
          {filterReserved && (
            filterReserved.map((mission) => (
              <li className="myRocketList" key={mission.id}>{mission.name}</li>
            )))}
        </ul>
        {(!filterReserved || !filterReserved[0]) && (
          <h5 className="noReservation">No mission yet!</h5>
        )}
      </div>
      <RocketProfile />
    </div>
  );
};

export default MyProfile;
