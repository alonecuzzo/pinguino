export const service = {
  userCreation,
  getUsers,
  getUserMapData
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

function getUserMapData(id) {
  const requestOpts = {
    method: 'GET',
    body: {'id': id}
  };

  return fetch('map', requestOpts).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
  
    return response.json();
  });

}
