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
      zoom: 12
    };

    this.map = new maps.Map(node, mapConfig);
    console.log(this.props.geoJSON);
    this.map.data.loadGeoJson(this.props.geoJSON);
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
  const { geoJSON } = state;
  return {
    geoJSON
  };
}

const connectedMapWrapper = connect(mapStateToProps)(MapWrapper);

export { connectedMapWrapper as MapWrapper };
