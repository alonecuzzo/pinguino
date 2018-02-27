function signup(user) {
  const requestOpts = {
    method: 'POST',
    body: JSON.stringify(user);
  };

  return fetch('user/signup', requestOpts).then(handleResponse);
}

