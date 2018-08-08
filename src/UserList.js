import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { UserItem } from './UserItem';
import './UserList.css';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(actions.getUsers());
  }

  render() {
    const { users } = this.props;
    console.log('Render');
    return (
      <div className="user-list">
      {users !== undefined && users.map((user) => 
          <Link to={{
            pathname: '/usermap',
            hash: `#${user.id}`,
            state: {user}
          }} key={user.id} className="user-item">
            <div className="user-item__content">
              <div className="user-item__left">
                <span className="user-item__avatar">ZE</span>
              </div>
              <div className="user-item__right">
                <div className="user-item__name">{user.name}</div>
                <div className="user-item__zipcode">{user.zipcode}</div>
              </div>
            </div>
          </Link>
      //<UserItem username={user.name}/>
      )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

const connectedUserList = connect(mapStateToProps)(UserList);

export { connectedUserList as UserList};
