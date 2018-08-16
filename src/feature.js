export const parseMapData = function(data) {
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
