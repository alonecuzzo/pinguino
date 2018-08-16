export const parseMapData = function(data) {
  const proposals = data.proposals;
  
  return proposals.map(proposal => {
    return {
      coordinates: {
        lat: parseFloat(proposal.latitude),
        lng: parseFloat(proposal.longitude)
      },
      name: proposal.title
    };
  });

}
