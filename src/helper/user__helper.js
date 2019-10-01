import { authHeader } from "./auth__header";
const API_URL = "http://localhost:3100/user/";

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${API_URL}/user/`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
};

const getAll = () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${API_URL}/user/`, requestOptions).then(handleResponse);
};

const getById = id => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
};

const register = user => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${API_URL}/users/register`, requestOptions).then(
    handleResponse
  );
};

const update = user => {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
};

// prefixed function name with underscore because delete is a reserved word in javascript
const _delete = id => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userHelper = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};
