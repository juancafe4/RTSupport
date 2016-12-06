import React from 'react';
class User extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <li style={{color:"black",}}>
          {user.name}
      </li>
    );
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
}
export default User;