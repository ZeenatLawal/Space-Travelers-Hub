import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { joinMission } from '../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr key={mission.id}>
      <td><strong>{mission.name}</strong></td>
      <td>{mission.description}</td>
      <td>NOT A MEMBER</td>
      <td><Button variant="outline-dark" onClick={() => join(mission.id)}>Join Mission</Button></td>
    </tr>

  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
