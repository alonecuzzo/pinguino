import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';

class UserListPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }

  render() {
    const { users } = this.props;
    return (
      <div>
      {users.length &&
        <ul>
          {users.map((user) => 
            <li key={user.id}>
              {user.name}
            </li>
          )}
        </ul>
      }
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { users } = state;
  return {
    users
  };
}

const connectedUserListPage = connect(mapStateToProps)(UserListPage);

export { connectedUserListPage as UserListPage};
