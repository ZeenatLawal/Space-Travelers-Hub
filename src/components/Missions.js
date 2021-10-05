import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions && missions.map((mission) => (
            <Mission
              key={mission.id}
              mission={mission}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
