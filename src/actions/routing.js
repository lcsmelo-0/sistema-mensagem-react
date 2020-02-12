import { routingRequest, routingRequestDone } from "./action-creators/routing";

const createRoutingRequest = route => dispatch =>
  dispatch(routingRequest(route));

export const requestRouting = route => dispatch =>
  dispatch(createRoutingRequest(route));

const defineRoutingDone = () => dispatch => dispatch(routingRequestDone());
export const setRoutingDone = () => dispatch => dispatch(defineRoutingDone());
