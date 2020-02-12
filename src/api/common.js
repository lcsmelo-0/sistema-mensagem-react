export const headers = {
  "Content-Type": "application/json",
  Authorization: ""
};

export const processResponse = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw response.json();
  }
};

export const baseEndPoint = "https://localhost:3000";
