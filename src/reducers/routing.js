import { ROUTING_REQUEST, ROUTING_REQUEST_DONE } from "../constants/routing";

export const routing = (
  state = {
    pushTo: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case ROUTING_REQUEST:
      newState.pushTo = action.data;
      return newState;

    case ROUTING_REQUEST_DONE:
      newState.pushTo = "";
      return newState;

    default:
      return state;
  }
};
