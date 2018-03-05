let users = JSON.parse(localStorage.getItem('users')) || [];

export function initializeMockBackend() {
  let originalFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith('user/signup') && opts.method === 'POST') {
          let newUser = JSON.parse(opts.body);
          if (isDuplicateUser(newUser)) {
            reject('Email ' + newUser.email + ' is already in use');
          } else {
            newUser.id = getUserId();
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            resolve({ 
              ok: true, 
              json: () => ({ message: 'User ' + newUser.id + 'created.'})
            });
          }

          return;
        }

        originalFetch(url, opts).then(response => resolve(response));

      }, 500);
    });
  }
}

function isDuplicateUser(newUser) {
  const duplicateUser = users.filter(user => { return user.email === newUser.email });

  return duplicateUser.length;
}

function getUserId(user) {
  if (users.length) {
    return  Math.max(...users.map(users => users.id)) + 1;
  } 

  return 1;
}
