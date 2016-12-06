import React from 'react';
class User extends React.Component {
  render() {
    const {user, activeUser} = this.props;
    const active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
          {user.name}
      </li>
    );
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
}
export default User;