import getMissions from '../../getMissions';

const LOAD_MISSIONS = 'space-travelers-hub/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

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

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});

export const leaveMission = (mission) => ({
  type: LEAVE_MISSION,
  payload: mission,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return { ...mission };
          }
          return { ...mission, reserved: true };
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return { ...mission };
          }
          return { ...mission, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
