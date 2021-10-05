import getMissions from '../../getMissions';

const LOAD_MISSIONS = 'space-travelers-hub/missions/LOAD_MISSIONS';

const initialState = [];

export const loadMissions = () => async (dispatch) => {
  const getResult = await getMissions();
  const missions = getResult.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));

  if (missions) {
    dispatch({
      type: LOAD_MISSIONS,
      payload: missions,
    });
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    default:
      return state;
  }
};

export default missionsReducer;
