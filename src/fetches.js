import URL from "./helpers";

export function fetchLogin(body) {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        username: body.username,
        password: body.password
      }
    })
  }).then(res => res.json());
}

export function fetchVerifyUser(token) {
  return fetch(`${URL}/home`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
}
