export const getFeatureCollection = function(data) {
  const proposals = data.proposals;
  
  let features = proposals.map(proposal => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [proposal.latitude, proposal.longitude]
      },
      properties: {
        name: proposal.title
      }
    };
  });

  return {
        type: 'FeatureCollection',
        features: features
  };
}
