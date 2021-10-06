const BOOK_ROCKETS = 'space-travelers-hub/Rocket/BOOK_ROCKETS';
const CANCEL_RESERVATION = 'space-travelers-hub/Rocket/CANCEL_RESERVATION';
const SET_ROCKETS = 'space-travelers-hub/Rocket/SET_ROCKETS';

const initialState = [];

export const cancleReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  id: payload,
});

export const bookRockets = (payload) => ({
  type: BOOK_ROCKETS,
  id: payload,
});

export const setRockets = (payload) => ({
  type: SET_ROCKETS,
  payload,
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
            return { ...rocket };
          }
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== parseInt(action.id, 10)) {
            return { ...rocket };
          }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
