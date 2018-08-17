import React from 'react';
import './UserItem.css';

class UserItem extends React.Component {

  getInitials(name) {
    if (name) {
      return name.slice(0,2);
    }
  }

  render() {
    const { user } = this.props;
    const initials = this.getInitials(user.name);
    return (
      <div className="user-item">
        <div className="user-item__content">
          <div className="user-item__left">
            <span className="user-item__avatar">{initials}</span>
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

export { UserItem };
