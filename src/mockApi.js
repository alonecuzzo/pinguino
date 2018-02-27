let users = JSON.parse(localStorage.getItem('users')) || [];

export function initMockApi() {
  let originalFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newUser = JSON.parse(opts.body);
        let duplicateUser = users.filter(user => { return user.email === newUser.email });
        let isDuplicateUser = duplicateUser.length;

        if (isDuplicateUser) {
          reject('Email ' + newUser.email + ' is already in use');
        } else {
          newUser.id = Math.max(...users.map(users => users.id)) + 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          resolve({ 
            ok: true, 
            json: () => ({ message: 'User ' + newUser.id + 'created.'});
          });
        }
      }, 500);
    });
  }

}
