import React, {Component} from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.users.map((user) => {
            return <User
              channel={user}
              key={user.id}
            />
          })
        }
      </ul>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
}
export default UserList;