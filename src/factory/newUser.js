export const newUser = {  
  create
};

function create(user) {
  return new Promise((resolve, reject) => {
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
}

function userIdExists(id) {
  const userExists = users.filter(user => { return user.id === id });
  return userExists.length;
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
