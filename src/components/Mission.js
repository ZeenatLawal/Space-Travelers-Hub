import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Mission = ({ mission }) => (
  <tr key={mission.id}>
    <td><strong>{mission.name}</strong></td>
    <td>{mission.description}</td>
    <td>NOT A MEMBER</td>
    <td><Button variant="outline-dark">Join Mission</Button></td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
