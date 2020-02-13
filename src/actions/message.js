import {
  messageCreateRequestSucceeded,
  messageDeleteRequest,
  messageDeleteRequestFailed,
  messageDeleteRequestSucceeded,
  messageRequest,
  messageRequestFailed,
  messageRequestSucceeded
} from "./action-creators/message";
import { apiMessageDelete, apiMessageRequest } from "../api/message";
import { error } from "./error";

const createMessageRequest = () => dispatch => {
  dispatch(messageRequest());
  return apiMessageRequest()
    .then(json => {
      dispatch(messageRequestSucceeded(json));
      return Promise.resolve();
    })
    .catch(json => {
      dispatch(error(json, messageRequestFailed));
      return Promise.reject();
    });
};

export const getMessages = () => dispatch => dispatch(createMessageRequest());

const createMessageRegisterRequest = payload => dispatch => {
  dispatch(messageCreateRequestSucceeded(payload));
};

export const createMessage = payload => dispatch =>
  dispatch(createMessageRegisterRequest(payload));

const deleteMessageRequest = id => dispatch => {
  dispatch(messageDeleteRequest());
  return apiMessageDelete(id)
    .then(() => {
      dispatch(messageDeleteRequestSucceeded(id));
      return Promise.resolve();
    })
    .catch(json => {
      dispatch(error(json, messageDeleteRequestFailed));
      return Promise.reject();
    });
};
export const deleteMessage = id => dispatch =>
  dispatch(deleteMessageRequest(id));
