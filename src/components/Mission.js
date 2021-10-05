import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <li key={mission.id}>
    <p>{mission.name}</p>
    <p>{mission.description}</p>
  </li>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
