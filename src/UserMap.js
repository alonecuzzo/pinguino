import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
import { MapWrapper } from './MapWrapper';
import './UserMap.css';

class UserMap extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(actions.getUserMap(props));
  } 

  render() {
    let { selectedUser, requestingMapData } = this.props;
    let user = selectedUser;
    return (
      <div className="user-map">
        {user !== undefined &&
          <div>
            <div className="user-map__name">{user.name}</div>
            <div className="user-map__zipcode">{user.zipcode}</div>
          </div>
        }
        { !requestingMapData &&
          <MapWrapper />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state');
  console.log(state);
  const { selectedUser, requestingMapData } = state;
  return {
    selectedUser,
    requestingMapData
  };
}

const connectedUserMap = connect(mapStateToProps)(UserMap);

export { connectedUserMap as UserMap };
