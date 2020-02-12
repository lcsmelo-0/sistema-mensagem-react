import { ROUTING_REQUEST, ROUTING_REQUEST_DONE } from "../../constants/routing";

export const routingRequest = route => ({
  type: ROUTING_REQUEST,
  data: route
});

export const routingRequestDone = () => ({
  type: ROUTING_REQUEST_DONE
});
