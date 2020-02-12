export const error = (message, action) => dispatch => {
  dispatch(action(message));
};
