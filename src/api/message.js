import { baseEndPoint, headers, processResponse } from "./common";

export const apiMessageRequest = () =>
  fetch(`${baseEndPoint}/message`, {
    method: "GET",
    headers: headers
  }).then(processResponse);

export const apiMessageRegister = payload =>
  fetch(`${baseEndPoint}/message`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload)
  }).then(processResponse);

export const apiMessageDelete = id =>
  fetch(`${baseEndPoint}/message/${id}`, {
    method: "DELETE",
    headers: headers
  });
