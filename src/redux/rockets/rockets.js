// const RESERVE_ROCKET = 'Space/Rocket/RESERVE_ROCKET';
// const CANCEL_RESERVATION = 'Space/Rocket/CANCEL_RESERVATION';
const SET_RESERVATION = 'Space/Rocket/SET_RESERVATION';

const initialState = [];

// export const cancleReservation = (payload) => ({
//   type: CANCEL_RESERVATION,
//   payload,
// });

export const setReservation = (payload) => ({
  type: SET_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION:
      console.log(action.payload);
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default reducer;
