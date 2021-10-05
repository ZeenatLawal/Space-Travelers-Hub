import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);

  const filterReserved = missions.filter((mission) => mission.reserved);

  return (
    <Container>
      <ul>
        {filterReserved.map((mission) => (
          <li className="border" key={mission.id}>{mission.name}</li>
        ))}
      </ul>
      {!filterReserved && (
        <h3>No Reserved Mission</h3>
      )}
    </Container>
  );
};
export default MyProfile;
