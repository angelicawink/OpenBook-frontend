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

export function fetchPostNewPoem(token, userID, newTitle, newContent) {
  return fetch(`${URL}/poems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      user_id: userID,
      title: newTitle,
      content: newContent
    })
  }).then(res => res.json());
}

export function fetchPostNewMoment(token, userID, feelingsID, settingID) {
  return fetch(`${URL}/moments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user_id: userID,
      feeling_id: feelingsID,
      setting_id: settingID
    })
  }).then(res => res.json());
}

export function fetchPostNewEntry(userID, entryContent, privacyInput, token) {
  return fetch(`${URL}/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      user_id: userID,
      content: entryContent,
      private: privacyInput
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

export function fetchEditPrivacy(token, entryID, updatedPrivacy) {
  return fetch(`${URL}/entries/${entryID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      private: updatedPrivacy
    })
  }).then(res => res.json());
}

export function fetchGetEntries(token) {
  return fetch(`${URL}/entries`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
}
