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
    console.log(mapRef);
    const node = ReactDOM.findDOMNode(mapRef);
    //const center = new maps.LatLng(this.props.lat, this.props.lng);
    const center = new maps.LatLng(40.6946, -73.9904);
    const mapConfig = {
      center: center,
      zoom: 11
    };

    this.map = new maps.Map(node, mapConfig);
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
  const { selectedUser } = state;
  return {
    selectedUser
  };
}

const connectedMapWrapper = connect(mapStateToProps)(MapWrapper);

export { connectedMapWrapper as MapWrapper };
