import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
import { MapWrapper } from './MapWrapper';
import { UserItem } from './UserItem';
import './UserMap.css';

class UserMap extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(actions.getUserMap(props));
  } 

  render() {
    let { selectedUser, mapDataRetrieved } = this.props;
    let user = selectedUser;
    return (
      <div className="user-map">
        {user !== undefined &&
          <UserItem user={ user } />
        }
        { mapDataRetrieved &&
          <MapWrapper />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { selectedUser, mapDataRetrieved } = state;
  return {
    selectedUser,
    mapDataRetrieved
  };
}

const connectedUserMap = connect(mapStateToProps)(UserMap);

export { connectedUserMap as UserMap };
