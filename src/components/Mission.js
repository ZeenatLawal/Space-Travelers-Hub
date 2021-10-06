import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr key={mission.id}>
      <td className="pb-4 col-1"><strong>{mission.name}</strong></td>
      <td className="pb-4 col-8">{mission.description}</td>
      <td className="align-middle col-1">
        {mission.reserved && (
          <Badge className="bg-badge">Active Member</Badge>
        )}
        {!mission.reserved && (
          <Badge bg="secondary">NOT A MEMBER</Badge>
        )}
      </td>
      <td className="align-middle ps-2">
        {mission.reserved && (
          <Button variant="outline-danger" size="sm" onClick={() => leave(mission.id)}>Leave Mission</Button>
        )}
        {!mission.reserved && (
          <Button variant="outline-dark" size="sm" onClick={() => join(mission.id)}>Join Mission</Button>
        )}
      </td>
    </tr>

  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
