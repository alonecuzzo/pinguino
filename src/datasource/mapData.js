import fetchJsonp from 'fetch-jsonp';

function get(zipcode) {
  const url = getUrl(zipcode)
  return fetchJsonp(url)
    .then(response => response.json())
    .then(response => parse(response))
    .catch(error => console.log('error:', error));
}

function parse(data) {
  const proposals = data.proposals;
  const markers = proposals.map(proposal => {
    return {
      coordinates: {
        lat: parseFloat(proposal.latitude),
        lng: parseFloat(proposal.longitude)
      },
      name: proposal.title
    };
  });

  return {
    center: {
      lat: data.latitude,
      lng: data.longitude
    },
    proposals: markers
  };
}

function getUrl(zipcode) {
  const baseUrl = 'https://api.donorschoose.org/common/json_feed.html';
  const zip = `zip=${zipcode}`;
  const apiKey = 'APIKey=ef4uju946azk';

  return `${baseUrl}?${zip}&${apiKey}`;
}

export const mapData = {
  get
};
