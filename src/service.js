import { mapData } from'./datasource/mapData';
import UserCollection from'./datasource/UserCollection';

class Service {
  constructor() {
    this.userCollection = new UserCollection();
  }

  createUser(userData) {
      return this.userCollection.add(userData);
  }

  getUserCollection() {
    const users = this.userCollection.get();
    return new Promise((resolve, reject) => {
      if(Array.isArray(users)){
        resolve(users);
      } else {
        reject('Error retrieving users collection');
      }
    });
  }

  getMapData(zip) {
    return mapData.get(zip);
  }

}

export default Service;
