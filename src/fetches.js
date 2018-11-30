
export function fetchVerifyUser(token) {
  return fetch(`http://localhost:3000/api/v1/home`, {
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(res => res.json())
}
