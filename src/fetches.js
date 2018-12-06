import URL from './helpers'

export function fetchVerifyUser(token) {
  return fetch(`${URL}/home`, {
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(res => res.json())
}
