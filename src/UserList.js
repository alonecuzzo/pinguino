import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserItem } from './UserItem';
import './UserList.css';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(actions.getUsers());
  }

  render() {
    const { users } = this.props;
    return (
      <div className="user-list">
      {users !== undefined && users.map((user) => 
          <Link to={{
            pathname: '/usermap',
            hash: `#${user.id}`,
            state: {user}
          }} key={user.id} className="user-list__link">
            <UserItem user={user}/>
          </Link>
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
