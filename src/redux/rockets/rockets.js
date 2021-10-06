import getRockets from '../../components/GetRockets';

const BOOK_ROCKETS = 'space-travelers-hub/Rocket/BOOK_ROCKETS';
const CANCEL_RESERVATION = 'space-travelers-hub/Rocket/CANCEL_RESERVATION';
const SET_ROCKETS = 'space-travelers-hub/Rocket/SET_ROCKETS';

const initialState = [];

export const loadRockets = () => async (dispatch) => {
  const result = await getRockets();
  const rockets = result.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));

  if (rockets) {
    dispatch({
      type: SET_ROCKETS,
      payload: rockets,
    });
  }
};

export const cancleReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  id: payload,
});

export const bookRockets = (payload) => ({
  type: BOOK_ROCKETS,
  id: payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };
    case BOOK_ROCKETS:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== parseInt(action.id, 10)) {
            return rocket;
          }
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== parseInt(action.id, 10)) {
            return rocket;
          }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
