import {
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_REQUEST_FAILED,
  MESSAGE_CREATE_REQUEST_SUCCEEDED,
  MESSAGE_DELETE_REQUEST,
  MESSAGE_DELETE_REQUEST_FAILED,
  MESSAGE_DELETE_REQUEST_SUCCEEDED,
  MESSAGE_REQUEST,
  MESSAGE_REQUEST_FAILED,
  MESSAGE_REQUEST_SUCCEEDED
} from "../constants/message";

export const message = (
  state = {
    data: [],
    isFetching: false
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case MESSAGE_REQUEST:
    case MESSAGE_CREATE_REQUEST:
    case MESSAGE_DELETE_REQUEST:
      newState.isFetching = true;
      return newState;
    case MESSAGE_REQUEST_SUCCEEDED:
      newState.data = action.data;
      return newState;
    case MESSAGE_CREATE_REQUEST_SUCCEEDED:
      newState.data.push(action.data);
      return newState;
    case MESSAGE_DELETE_REQUEST_SUCCEEDED:
      newState.data = newState.data.filter(item => item.id !== action.data);
      return newState;
    case MESSAGE_REQUEST_FAILED:
    case MESSAGE_CREATE_REQUEST_FAILED:
    case MESSAGE_DELETE_REQUEST_FAILED:
      newState.isFetching = false;
      return newState;
    default:
      return state;
  }
};
