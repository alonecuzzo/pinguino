import fetchJsonp from 'fetch-jsonp';
import { getFeatureCollection } from './feature';

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
  
  const donorChooseUrl = 'https://api.donorschoose.org/common/json_feed.html?zip=11249&APIKey=ef4uju946azk';

  fetchJsonp(donorChooseUrl)
    .then(response => response.json())
    .then(response => { 
      console.log(response);
      const collection = getFeatureCollection(response);
      console.log(collection);
    })
    .catch(error => console.log('error:', error));
}
