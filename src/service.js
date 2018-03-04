export const service = {
  signup
};

function signup(user) {
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

