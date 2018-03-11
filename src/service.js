export const service = {
  userCreation,
  getUsers
};

function userCreation(user) {
  const requestOpts = {
    method: 'POST',
    body: JSON.stringify(user)
  };

  return fetch('user/signup', requestOpts).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
  
    return response.json();
  });
}

function getUsers() {
  const requestOpts = {
    method: 'GET'
  };

  return fetch('users', requestOpts).then((response) => {
    return response.json();
  });
}
