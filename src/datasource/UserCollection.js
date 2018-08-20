class UserCollection {
  constructor(users = []) {
    this.users = users;
  }
  
  get() {
    return this.users;
  }

  add(user) {
    const userId = this._getUserId(user);
    const newUser = Object.assign({}, user, {id: userId });
    this.users.push(newUser);
    return newUser;
  }

  _isValidNewUser(user) {
    return this._isDuplicateUser(user);
  }

  _isDuplicateUser(newUser) {
    const duplicateUser = this.users.filter(user => { return user.email === newUser.email });
    return duplicateUser.length;
  }

  _getUserId(user) {
    const users = this.users;
    if (users.length) {
      return  Math.max(...users.map(users => users.id)) + 1;
    }

    return 1;
  }
};

export default UserCollection;
