import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './MapWrapper.css';

//I was creating components like this as well, but the guys told me that in simpler components like this one
//where you're not doing too much with the state you can declare like:
// const MapWrapper = ({ props }) => {
//I'm not sure how common this is, I've seen both ways a bunch in our project so just a small comment.
//Actually you might not want to do it this way since you're doing some setup in your constructor.
class MapWrapper extends React.Component {

  componentDidMount() {
    //These might work better in the constructor since a component can be mounted and unmounted
    //multiple times in a single use.  It seems like you'd want these things to happen at most once
    //per component.
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
      return new maps.Marker({
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
  const { selectedUser } = state;
  const mapData = selectedUser.mapData;
  return {
    mapData
  };
}

const connectedMapWrapper = connect(mapStateToProps)(MapWrapper);

export { connectedMapWrapper as MapWrapper };
