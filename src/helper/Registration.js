const API_URL = "http://localhost:8888/api/users/";

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${API_URL}/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = (user, history) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: user
  };

  return fetch(`${API_URL}/register`, requestOptions).then(handleResponse).then(history.push(`/login`))
};



function handleResponse (response) {
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


export const regisHelper = {
  login,
  logout,
  register,
};
