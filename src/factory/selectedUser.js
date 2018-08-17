export const selectedUser = {
  retrieveMapData
};

function retrieveMapData(zipcode) {
  return fetchJsonp(donorChooseUrl)
    .then(response => response.json())
    .then(response => parseMapData(response))
    .catch(error => console.log('error:', error));
}

function getUrl(zipcode) {
  const baseUrl = 'https://api.donorschoose.org/common/json_feed.html';
  const zip = `zip=${zipcode}`;
  const apiKey = 'APIKey=ef4uju946azk';

  return `${baseUrl}?${zip}&${apiKey}`;
}
