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
} from "../../constants/message";

export const messageRequest = () => ({
  type: MESSAGE_REQUEST
});

export const messageRequestSucceeded = json => ({
  type: MESSAGE_REQUEST_SUCCEEDED,
  data: json
});

export const messageRequestFailed = json => ({
  type: MESSAGE_REQUEST_FAILED,
  error: json.detail
});

export const messageCreateRequest = () => ({
  type: MESSAGE_CREATE_REQUEST
});

export const messageCreateRequestSucceeded = json => ({
  type: MESSAGE_CREATE_REQUEST_SUCCEEDED,
  data: json
});

export const messageCreateRequestFailed = json => ({
  type: MESSAGE_CREATE_REQUEST_FAILED,
  error: json.detail
});

export const messageDeleteRequest = () => ({
  type: MESSAGE_DELETE_REQUEST
});

export const messageDeleteRequestSucceeded = id => ({
  type: MESSAGE_DELETE_REQUEST_SUCCEEDED,
  data: id
});

export const messageDeleteRequestFailed = json => ({
  type: MESSAGE_DELETE_REQUEST_FAILED,
  error: json.detail
});
