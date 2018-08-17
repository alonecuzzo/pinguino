import React from 'react';
import { actions } from './actions';
import { connect } from 'react-redux';
//import './UserItem.css';

class UserItem extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div className="user-item">
        <div className="user-item__content">
          <div className="user-item__left">
            <span className="user-item__avatar">ZE</span>
          </div>
          <div className="user-item__right">
            <div className="user-item__name">{user.name}</div>
            <div className="user-item__zipcode">{user.zipcode}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { UserItem as UserItem};
