import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
import './UserMap.css';

class UserMap extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(actions.getUserMap(props));
  } 

  render() {
    let { selectedUser } = this.props;
    let user = selectedUser;
    console.log("RENDERING USER MAP");
    console.log(this.props);
    //console.log(selectedUser);
    //console.log(user);
    return (
      <div className="user-map">
        {user !== undefined &&
          <div className="user-map__name">{user.name}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state');
  console.log(state);
  const { selectedUser } = state;
  return {
    selectedUser
  };
}

const connectedUserMap = connect(mapStateToProps)(UserMap);

export { connectedUserMap as UserMap };
