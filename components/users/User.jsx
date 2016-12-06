import React from 'react';
class User extends React.Component {
  onClick(e) {
    e.preventDefault();
    const {user, setUser} = this.props;
    setUser(user);
  }
  render() {
    const {user, activeUser} = this.props;
    const active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {user.name}
        </a>
      </li>
    );
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired,
}
export default User;