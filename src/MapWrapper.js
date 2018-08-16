import React from 'react';
import ReactDOM from 'react-dom';
import { actions } from './actions';
import { connect } from 'react-redux';
import './MapWrapper.css';

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const maps = window.google.maps;
    const mapRef = this.refs.map;
    const { mapData } = this.props; 
    const node = ReactDOM.findDOMNode(mapRef);
    const center = new maps.LatLng(mapData.center);
    const mapConfig = {
      center: center,
      zoom: 12
    };

    const map = new maps.Map(node, mapConfig);
    mapData.proposals.map(proposal => {
      const latLng = new maps.LatLng(proposal.coordinates);
      const marker = new maps.Marker({
        position: latLng,
        map: map
      });
    });
  }


  render() {
    return (
      <div className="map-wrapper">
        <div ref='map' className="map"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { mapData, selectedUser } = state;
  return {
    mapData,
    selectedUser
  };
}

const connectedMapWrapper = connect(mapStateToProps)(MapWrapper);

export { connectedMapWrapper as MapWrapper };
